const path = require(`path`)
const PAGES_TO_CREATE = [new RegExp(`psykologene/?.*`), new RegExp(`behandling/?.*`)]
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
          id
          pageId
          pageTitle: title
          uri
          featuredImage {
            sourceUrl
            imageFile {
              childImageSharp {
                fluid {
                  src
                }
              }
            }
          }
          sections {
            sectionContent: content {
              ... on WPGraphQL_Page_Sections_Content_Pagetitle {
                subtitle
                title
              }
            }
          }
          content
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
    const behandlingPageTemplate = path.resolve(`./src/templates/behandlingPagesTemplate.js`)
    const psykologenePageTemplate = path.resolve(`./src/templates/psykologenePageTemplate.js`)

    filteredAllPages.map(page => {
      if (page.uri.includes(`behandling`)) {
        createPage({
          path: `/${page.uri}`,
          component: behandlingPageTemplate,
          context: page
        })
      } else {
        createPage({
          path: `/${page.uri}`,
          component: psykologenePageTemplate,
          context: page
        })
      }
    })
  })

}
