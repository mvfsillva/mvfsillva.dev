import React, { Component, Children, cloneElement } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { ThemeProvider } from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'

import theme from '../theme/main'
import GlobalStyles from '../theme/global-styles'
import FullContainer from '../styles/full-container'
import Transition from '../components/transition'

import lion from '../static/images/lion.png'

import pkg from '../../package.json'

class Layout extends Component {
  state = {
    lang: 'en'
  }

  static propTypes = {
    children: PropTypes.node.isRequired,
    location: PropTypes.object,
  }

  componentDidMount() {
    const lang = localStorage.getItem('language') || 'en'
    this.setState({ lang })
  }

  render () {
    const { lang } = this.state
    const { children, location } = this.props
    const { pathname } = location
    const customSiteTitle = pathname !== '/' && `mvfsillva - ${pathname.replace('/', '')}`
    const setLanguage = lang => {
      localStorage.setItem('language', lang)
      this.setState({ lang })
    }

    const childrenWithSetLanguage = Children.map(children, child => cloneElement(child, { lang, setLanguage }))

    return (
      <Transition location={location}>
        <StaticQuery
          query={graphql`
            query SiteTitleQuery {
              site {
                siteMetadata {
                  title
                  siteUrl
                  description
                  author
                }
              }
            }
          `}
          render={({ site: { siteMetadata: { title, author, description } } }) => (
            <ThemeProvider theme={theme}>
              <FullContainer>
                <Helmet title={customSiteTitle || title} htmlAttributes={{ lang }}>
                  <meta name="description" content={pkg.description} />
                  <meta name="keywords" content={pkg.keywords} />
                  <meta name="twitter:card" content="summary_large_image" />
                  <meta name="twitter:card" content="summary" />
                  <meta name="twitter:image" content={lion} />
                  <meta name="twitter:site" content={author} />
                  <meta name="twitter:creator" content={author} />
                  <meta name="twitter:title" content={customSiteTitle || title} />
                  <meta name="twitter:description" content={description} />
                </Helmet>
                <GlobalStyles />
                {childrenWithSetLanguage}
              </FullContainer>
            </ThemeProvider>
          )}
        />
      </Transition>
    )
  }
}

export default Layout
