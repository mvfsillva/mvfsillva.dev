import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { ThemeProvider } from 'styled-components'
import { StaticQuery } from 'gatsby'

import theme from '../theme/main'
import GlobalStyles from '../theme/global-styles'

import { SiteTitle } from '../queries'

import lion from '../static/images/lion.svg'

const Main = ({ title, children }) => (
  <StaticQuery
    query={SiteTitle}
    render={({ site }) => (
      <ThemeProvider theme={theme}>
        <>
          <Helmet title={title || site.siteMetadata.title}>
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:image" content={lion} />
            <meta name="twitter:site" content={site.siteMetadata.author} />
            <meta name="twitter:creator" content={site.siteMetadata.author} />
            <meta name="twitter:title" content={title || site.siteMetadata.title} />
            <meta name="twitter:description" content={site.siteMetadata.description} />
          </Helmet>
          <GlobalStyles />
          {children}
        </>
      </ThemeProvider>
    )}
  />
)

Main.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
}

export default Main
