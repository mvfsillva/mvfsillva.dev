const path = require('path')
const slash = require('slash')
const { createFilePath } = require('gatsby-source-filesystem')
const _ = require('lodash')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve('src/templates/single-post.js')
  const tagPagesTemplate = path.resolve('src/templates/single-tag.js')

  return graphql(
    `
      {
        allMarkdownRemark(filter: { frontmatter: { draft: { ne: true } } }) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                tags
              }
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    result.data.allMarkdownRemark.edges.map(edge =>
      createPage({
        path: edge.node.fields.slug,
        component: slash(blogPostTemplate),
        context: {
          slug: edge.node.fields.slug,
          highlight: edge.node.frontmatter.highlight,
          shadow: edge.node.frontmatter.shadow,
        },
      })
    )

    let tags = []
    result.data.allMarkdownRemark.edges.map(edge => {
      if (_.get(edge, 'node.frontmatter.tags')) {
        tags = tags.concat(edge.node.frontmatter.tags)
      }
    })

    tags = _.uniq(tags)

    tags.map(tag => {
      const tagPath = `/tags/${_.kebabCase(tag)}/`
      return createPage({
        path: tagPath,
        component: tagPagesTemplate,
        context: { tag }
      })
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === 'File') {
    const slug = createFilePath({ node, getNode, basePath: 'posts' })
    createNodeField({ node, name: 'slug', value: slug })
  } else if (node.internal.type === 'MarkdownRemark' && typeof node.slug === 'undefined') {
    const fileNode = getNode(node.parent)
    createNodeField({
      node,
      name: 'slug',
      value: fileNode.fields.slug,
    })

    if (node.frontmatter.tags) {
      const tagSlugs = node.frontmatter.tags.map(tag => `/tags/${_.kebabCase(tag)}/`)
      createNodeField({ node, name: 'tagSlugs', value: tagSlugs })
    }
  }
}
