require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `Metakognitiv Terapi Oslo`,
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
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-googlemaps-static`,
      options: {
        key: process.env.GOOGLE_MAP_STATIC_API_KEY,
        center: `59.942429, 10.703862`,
        zoom: `15`,
        size: `400x640`,
        type: `png-32`,
        scale: `2`,
        markers: [
          {
            location: `59.942429, 10.703862`,
            color: `0x323232`,
            size: `mid`
          },
        ],
        styles: `https://www.google.com/maps/@?api=1&map_action=map&center=59.942429%2C%2010.703862&style=element:geometry|color:0xf5f5f5&style=element:labels.icon|visibility:off&style=element:labels.text.fill|color:0x616161&style=element:labels.text.stroke|color:0xf5f5f5&style=feature:administrative.land_parcel|element:labels.text.fill|color:0xbdbdbd&style=feature:poi|element:geometry|color:0xeeeeee&style=feature:poi|element:labels.text.fill|color:0x757575&style=feature:poi.park|element:geometry|color:0xe5e5e5&style=feature:poi.park|element:labels.text.fill|color:0x9e9e9e&style=feature:road|element:geometry|color:0xffffff&style=feature:road.arterial|element:labels.text.fill|color:0x757575&style=feature:road.highway|element:geometry|color:0xdadada&style=feature:road.highway|element:labels.text.fill|color:0x616161&style=feature:road.local|element:labels.text.fill|color:0x9e9e9e&style=feature:transit.line|element:geometry|color:0xe5e5e5&style=feature:transit.station|element:geometry|color:0xeeeeee&style=feature:water|element:geometry|color:0xc9c9c9&style=feature:water|element:labels.text.fill|color:0x9e9e9e`
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
