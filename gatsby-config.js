require('dotenv').config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    title: `The Platform`,
    description: `The Platform blog home website.`,
    author: `Jordan Hlebechuk`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.GATSBY_CONTENTFUL_SPACE_ID,
        accessToken: process.env.GATSBY_CONTENTFUL_ACCESS_TOKEN
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#2C2C2C`,
        theme_color: `#2C2C2C`,
        display: `minimal-ui`,
        icon: `src/images/platform_logo_dark.svg`, // This path is relative to the root of the site.
      },
    }
  ],
}
