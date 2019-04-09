const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')
const slugify = require('slugify')

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  if(node.iternal.type === 'MarkdownRemark') {
    const slug = createFilePath(({ node, getNode, basePath: 'posts' }))
    createNodeField({ node, name: 'slug', value: slug })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, _) => {
    graphql(`
      {
        allMarkdownRemark {
          edges {
            frontmatter {
              tags
            }
            fields {
              slug
            }
          }
        }
      }
    `)
  }).then(res => {
    const posts = res.data.allMarkdownRemark.edges
    posts.map(({ node }) => {
      createPage({
        path: node.fields.slug,
        component: path.resolve('src/templates/singlepost.js'),
        context: {
          slug: node.fields.slug
        }
      })
    })
  })
}