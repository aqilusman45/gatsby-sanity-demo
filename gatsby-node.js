const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    query BlogPostQuery {
      allSanityBlogs(sort: { _updatedAt: DESC }) {
        nodes {
          id
          title
          slug {
            current
          }
          publishedAt(formatString: "MMMM d, yyyy")
          featured
          seoTitle
          description
          metaDescription
          desktopImage {
            title
            asset {
              gatsbyImageData(placeholder: NONE)
            }
          }
          authors {
            name
          }
          blogCategory {
            category
          }
          _rawBody
        }
      }
      site {
        siteMetadata {
          siteUrl
        }
      }
    }
  `)

  const pressPostTemplate = path.resolve(`src/templates/blogs-post.js`)

  result.data.allSanityBlogs.nodes.forEach((node) => {
    createPage({
      path: `blogs/${node.slug.current}`,
      component: pressPostTemplate,
      context: {
        page: { ...node },
        featured: result.data.allSanityBlogs.nodes
          .filter(({ blogCategory: { category }, featured }) => {
            return featured === true && category === node.blogCategory.category
          })
          .slice(0, 3),
      },
    })
  })

  const result2 = await graphql(`
    query {
      allSanityBlogCategory {
        nodes {
          category
          seoTitle
          metaDescription
        }
      }
      allSanityBlogs(sort: { _updatedAt: DESC }) {
        nodes {
          id
          title
          slug {
            current
          }
          publishedAt(formatString: "MMMM d, yyyy")
          featured
          seoTitle
          description
          metaDescription
          desktopImage {
            title
            asset {
              gatsbyImageData(placeholder: NONE)
            }
          }
          authors {
            name
          }
          blogCategory {
            category
          }
          _rawBody
        }
      }
      allSanityBlogsHeroSection {
        nodes {
          blogCategory {
            category
          }
          identifier
          _rawSubText
          isdarkTheme
        }
      }
    }
  `)

  const blogsHubTemplate = path.resolve(`src/templates/blogs-hub.js`)

  result2.data.allSanityBlogCategory.nodes.forEach((node) => {
    createPage({
      path: `blogs/${node.category
        .toLowerCase()
        .replace(/ /g, '-')
        .replace(/[^\w-]+/g, '')}`,
      component: blogsHubTemplate,
      context: {
        seoTitle: node.seoTitle,
        metaDescription: node.metaDescription,
        pagedata: {
          data: {
            heading: 'Discover more of what matters to you',
            blogs: result2.data.allSanityBlogs.nodes.filter(
              (blogsNode) =>
                blogsNode?.blogCategory?.category === node?.category
            ),
            allBlogs: result2.data.allSanityBlogs.nodes,
            // nodes : result2.data.allSanityBlogs.nodes 
          },
          heroSection: result2.data.allSanityBlogsHeroSection.nodes.find(
            (blogsNode) => blogsNode?.blogCategory?.category === node?.category
          ),
        },
      },
    })
  })
}
