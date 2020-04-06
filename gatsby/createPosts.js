const path = require(`path`)
module.exports = async ({ actions, graphql }) => {
  // Setup query
  const GET_POSTS = `
  query GET_POSTS($first: Int $after: String) {
    wpgraphql {
      posts(
        first: $first
        after: $after
      ) {
        pageInfo {
          endCursor
          hasNextPage
        }
        nodes {
          id
          postId
          uri
          author {
            id
            name
            description
          }
          date
          categories(first: 2) {
            nodes {
              id
              slug
              name
            }
          }
          slug
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
          content
          sections {
            content {
              ... on WPGraphQL_Post_Sections_Content_Pagetitle {
                subtitle
                title
              }
            }
          }
        }
      }
      psychologistBy(psychologistId: 3918) {
        psychologist {
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
        }
      }
    }
  }
`
  const { createPage } = actions
  const allPosts = []
  // Create a function for getting pages
  const fetchPosts = async variables =>
    await graphql(GET_POSTS, variables).then(({ data }) => {
      const {
        wpgraphql: {
          posts: {
            nodes,
            pageInfo: { hasNextPage, endCursor }
          }
        }
      } = data

      nodes.map(post => {
        allPosts.push(post)
      })
      if (hasNextPage) {
        return fetchPosts({ first: variables.first, after: endCursor })
      }
      return allPosts
    })
  // Map over all of the pages and call CreatePage
  await fetchPosts({ first: 100, after: null }).then(allPosts => {
    const pageTemplate = path.resolve(`./src/templates/postTemplate.js`)
    allPosts.map(post => {
      createPage({
        path: `/blogg/${post.uri}`,
        component: pageTemplate,
        context: post
      })
    })
  })

}
