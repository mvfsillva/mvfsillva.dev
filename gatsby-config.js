const fetch = require('node-fetch')
const { createHttpLink } = require('apollo-link-http')

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: 'mvfsillva',
    description: 'Personal website of Marcus Silva, a front-end developer passionate for javascript, react, and new technologies. Currently work at IDwall, and dreams of traveling the world',
    author: '@mvfsillva',
    siteUrl: 'https://mvfsillva.dev',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-resolve-src',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-twitter',
    'gatsby-plugin-layout',
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/posts`,
        name: 'posts',
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://mvfsillva.dev',
        sitemap: 'https://mvfsillva.dev/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'mvfsillva',
        short_name: 'mvfsillva',
        start_url: '/',
        background_color: '#FFFFFF',
        theme_color: '#FFFFFF',
        display: 'fullscreen',
        orientation: 'portrait',
        icon: 'src/static/images/circle-lion.png',
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-136626463-1',
        head: true,
        anonymize: false,
        respectDNT: true
      },
    },
    {
      resolve: 'gatsby-source-graphql',
      options: {
        fieldName: 'github',
        typeName: 'GitHub',
        createLink: () => createHttpLink({
          uri: 'https://api.github.com/graphql',
          headers: {
            Authorization: `bearer ${process.env.GATSBY_GITHUB_TOKEN}`,
          },
          fetch,
        }),
      },
    },
    'gatsby-plugin-offline',
  ],
}