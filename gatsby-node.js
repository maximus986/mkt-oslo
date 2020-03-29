const { createRemoteFileNode } = require(`gatsby-source-filesystem`);
const createPages = require(`./gatsby/createPages`)
const createPosts = require(`./gatsby/createPosts`)
const createCategories = require(`./gatsby/createCategories`)

exports.createPages = async ({ actions, graphql }) => {
  await createPages({ actions, graphql })
  await createPosts({ actions, graphql })
  await createCategories({ actions, graphql })
}


exports.createResolvers = ({
  actions,
  cache,
  createNodeId,
  createResolvers,
  store,
  reporter,
}) => {
  const { createNode } = actions
  createResolvers({
    WPGraphQL_MediaItem: {
      imageFile: {
        type: `File`,
        resolve(source, args, context, info) {
          return createRemoteFileNode({
            url: source.sourceUrl,
            store,
            cache,
            createNode,
            createNodeId,
            reporter,
          })
        },
      },
    },
    WPGraphQL_Avatar: {
      imageFile: {
        type: `File`,
        resolve(source, args, context, info) {
          return createRemoteFileNode({
            url: source.url,
            store,
            cache,
            createNode,
            createNodeId,
            reporter,
          })
        },
      },
    },
  })
}

