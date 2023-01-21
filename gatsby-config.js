/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata : {
    title: 'simply recipe',
    description: 'easy to check recipe site',
    author: '@kora',
    persin : { name:'kora', age:52},
      simpleData:['item1', 'item2'],
      complexData: [
        {name:'john' ,age:32},
        {name:'susan' ,age:29},
      ],
  },
  plugins: [
    {
      resolve: `gatsby-plugin-styled-components`,
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,

        {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },

        {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `zb8btblji737`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_API_KEY,
      },
    },

    //     {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `css`,
    //     path: `${__dirname}/src/assets/css`,
    //   },
    // },

        {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: "Montserrat",
              variants: ["400"],
            },
            {
              family: "Inconsolata",
              variants: ["400", "500", "600", "700"],
            },
          ],
        },
      },
    },

    `gatsby-plugin-react-helmet`,

  ],
}
