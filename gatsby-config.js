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
        icon: 'src/static/images/lion.png',
      },
    }
  ],
}
