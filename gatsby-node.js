const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')
const slugify = require('slugify')
const _ = require('lodash')

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  console.log('*'.repeat(100), actions)

  if(node.iternal.type === 'MarkdownRemark') {
    const slug = createFilePath(({ node, getNode, basePath: 'posts' }))
    createNodeField({ node, name: 'slug', value: slug })
  }
}

exports.createPages = ({ graphql, actions }) => {
  console.log('*'.repeat(10))
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
    `).then(res => {
      console.log(res)
      const posts = res.data.allMarkdownRemark.edges
      posts.map(({ node }) => {
        createPage({
          path: node.fields.slug,
          component: path.resolve('./src/templates/single-post.js'),
          context: {
            slug: node.fields.slug
          }
        })
        let tags = []
        _.each(posts, edge => {
          if (_.get(edge, 'node.frontmatter.tags')) {
            tags = tags.concat(edge.node.frontmatter.tags)
          }
        })

        tags = _.uniq(tags)

        tags.map(tag => {
          createPage({
            path: `/tag/${slugify(tag, { lower: true })}/`,
            component: path.resolve('./src/templates/tag.js'),
            context: { tag }
          })
        })
      })
      resolve()
    })
  })
}