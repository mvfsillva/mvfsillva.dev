import { graphql, useStaticQuery } from 'gatsby'

const getPosts = () => {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
          totalCount
          edges {
            node {
              id
              frontmatter {
                title
                date
                tags
              }
              fields {
                slug
              }
              timeToRead
            }
          }
        }
      }
    `,
  )

  const data = allMarkdownRemark

  return data
}

export default getPosts
