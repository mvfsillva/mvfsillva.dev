import { graphql } from 'gatsby'

export const SiteTitle = graphql`
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
`
