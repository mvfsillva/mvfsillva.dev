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
    'gatsby-plugin-twitter',
    'gatsby-plugin-layout',
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'static',
        path: `${__dirname}/src/static`,
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
        icon: 'src/static/images/cirle-lion.png',
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
  ],
}