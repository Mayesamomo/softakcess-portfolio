const path = require('path')

// create pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    {
      blogs: allStrapiBlogs {
        nodes {
          slug
        }
      }
    }
  `)
  result.data.blogs.nodes.forEach(blog => {
    createPage({
      path: `/blogs/${blog.slug}`,
      component: path.resolve(`src/templates/blog-template.js`),
      context: {
        slug: blog.slug,
      },
    })
  })
}
  exports.createResolvers = ({
    actions,
    cache,
    createNodeId,
    createResolvers,
    store,
    reporter,
  }) => {
    const { createNode } = actions
    createResolvers({
      StrapiBlogs: {
        imageFile: {
          type: `File`,
          resolve(source, args, context, info) {
            return createRemoteFileNode({
              url: `${source.url}`, // for S3 upload. For local: `http://localhost:1337${source.url}`,
              store,
              cache,
              createNode,
              createNodeId,
              reporter,
            })
          },
        },
      },
    })
}
