import React from 'react'
import Layout from '../components/Layout/Layout'
import BlogPostSection from '../sections/BlogPostSection/BlogPostSection'
import Seo from '../components/seo'
import FeaturedBlogSection from '../sections/FeaturedBlogSection/FeaturedBlogSection'

const PressTemplate = (props) => {
  const post = props.pageContext
  return (
    <Layout>
      <BlogPostSection {...post.page} />
      <FeaturedBlogSection nodes={post.featured} />
    </Layout>
  )
}

export const Head = ({ pageContext:{page:{seoTitle, metaDescription }}}) => (
  <Seo title={seoTitle} description={metaDescription} />
)

export default PressTemplate
