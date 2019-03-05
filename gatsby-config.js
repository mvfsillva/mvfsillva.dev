module.exports = {
  siteMetadata: {
    title: 'mvfsillva',
    description: 'Front-end developer',
    author: '@mvfsillva',
    siteUrl: 'https://mvfsillva.dev',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'static',
        path: `${__dirname}/src/static`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
  ],
}
