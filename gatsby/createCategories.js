const path = require(`path`);
module.exports = async ({ actions, graphql }) => {
  const GET_CATEGORIES = `
  query GET_CATEGORIES($first: Int) {
    wpgraphql {
      categories(
        first: $first
      ) {
        pageInfo {
          endCursor
          hasNextPage
        }
        nodes {
          name
          slug
          id
          posts {
            nodes {
              title
              id
              content
              featuredImage {
                imageFile {
                  childImageSharp {
                    fluid(maxHeight: 750, maxWidth: 870) {
                      src
                    }
                  }
                }
                sourceUrl
              }
            }
          }
        }
      }
    }
  }
`;
  const { createPage } = actions;
  const allCategories = [];
  const fetchCategories = async variables =>
    await graphql(GET_CATEGORIES, variables).then(({ data }) => {
      const {
        wpgraphql: {
          categories: {
            nodes,
            pageInfo: { hasNextPage, endCursor },
          },
        },
      } = data;

      nodes.map(category => {
        allCategories.push(category);
      });
      if (hasNextPage) {
        return fetchCategories({ first: variables.first, after: endCursor });
      }
      return allCategories;
    });
  await fetchCategories({ first: 100 }).then(allCategories => {
    const categoryTemplate = path.resolve(`./src/templates/categoryTemplate.js`);
    allCategories.map(category => {
      createPage({
        path: `/blogg/category/${category.slug}`,
        component: categoryTemplate,
        context: category,
      });
    });
  });
};
