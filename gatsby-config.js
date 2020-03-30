module.exports = {
  siteMetadata: {
    title: `mkt-oslo`,
    description: `Metakognitiv Terapi Oslo`,
    author: `@AleksandarM986`,
  },
  plugins: [
    {
      resolve: `gatsby-source-graphql`,
      options: {
        typeName: `WPGraphQL`,
        fieldName: `wpgraphql`,
        url: `http://staging.metakognitivterapi-oslo.no/graphql`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-theme-ui`,
    `gatsby-plugin-emotion`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Metakognitiv Terapi-Oslo`,
        short_name: `mkt-oslo`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // {
    //   resolve: `gatsby-plugin-prefetch-google-fonts`,
    //   options: {
    //     fonts: [
    //       {
    //         family: `Lato`,
    //         variants: [`300`, `300i`, `400`, `700`],
    //         fontDisplay: `swap`
    //       },
    //       {
    //         family: `Montserrat`,
    //         variants: [`400`],
    //         fontDisplay: `swap`
    //       },
    //       {
    //         family: `Nothing You Could Do`,
    //         variants: [`300`],
    //         fontDisplay: `swap`
    //       },
    //     ],
    //   },
    //}
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
