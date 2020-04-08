const path = require(`path`)

const PAGES_TO_CREATE = [new RegExp(`psykologene/?.*`)] // TODO Delete regex once creation of all pages from WP is resolved
const PSYCHOLOGISTS_SLUG = 'psykologene'

module.exports = async ({ actions, graphql }) => {
  // Setup query
  const GET_PAGES = `
  query GET_PAGES($first: Int $after: String) {
    wpgraphql {
      pages(
        first: $first
        after: $after
        where: {
          parent: null
        }
      ) {
        pageInfo {
          endCursor
          hasNextPage
        }
        nodes {
          uri
          id
          slug
          sections {
            content {
              ... on WPGraphQL_Page_Sections_Content_Pagetitle {
                title
              }
              ... on WPGraphQL_Page_Sections_Content_Welcome {
                primaryinfo
                secondaryinfo
              }
              ... on WPGraphQL_Page_Sections_Content_Psychologists {
                psychologist {
                  ... on WPGraphQL_Psychologist {
                    id
                    slug
                    psychologist {
                      longdescription
                      name
                      proffesion
                      shortdescription
                      avatarimage {
                        sourceUrl
                        imageFile {
                          childImageSharp {
                            fluid {
                              src
                            }
                          }
                        }
                      }
                      largeimage {
                        sourceUrl
                        imageFile {
                          childImageSharp {
                            fluid {
                              src
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`
  const { createPage } = actions
  const allPages = []
  // Create a function for getting pages
  const fetchPages = async variables =>
    await graphql(GET_PAGES, variables).then(({ data }) => {
      const {
        wpgraphql: {
          pages: {
            nodes,
            pageInfo: { hasNextPage, endCursor }
          }
        }
      } = data

      nodes.map(page => {
        allPages.push(page)
      })
      if (hasNextPage) {
        return fetchPages({ first: variables.first, after: endCursor })
      }
      return allPages
    })
  // Map over all of the pages and call CreatePage
  await fetchPages({ first: 100, after: null }).then(allPages => {
    // const filteredAllPages = allPages.filter(page => (page.uri.match(behandlingRegex) || page.uri.match(psykologeneRegex)))
    const filteredAllPages = allPages.filter(({ uri }) => {
      let toCreatePage = null
      PAGES_TO_CREATE.forEach(pageToCreateRegex => {
        if (uri.match(pageToCreateRegex)) {
          toCreatePage = true
        }
      })
      return toCreatePage
    })
    const psychologistPageTemplate = path.resolve(`./src/templates/psychologistPageTemplate.js`)
    const psychologistsPageTemplate = path.resolve(`./src/templates/psychologistsPageTemplate.js`)

    filteredAllPages.map(page => {
      if (page.slug === PSYCHOLOGISTS_SLUG) {
        createPage({
          path: `/${page.uri}`,
          component: psychologistsPageTemplate,
          context: page
        })
      } else {
        createPage({
          path: `/${page.uri}`,
          component: psychologistPageTemplate,
          context: page
        })
      }
    })
  })

}
