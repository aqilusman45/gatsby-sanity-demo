import React from 'react'
import Layout from '../components/Layout/Layout'
import Seo from '../components/seo'
import BlogHeroSection from '../sections/BlogHeroSection/BlogHeroSection'
import BlogsSection from '../sections/BlogsSection/BlogsSection'

const BlogsTemplate = (props) => {
  const {pagedata} = props.pageContext
  const {heroSection,data}= pagedata

  return (
    <Layout>
       {Object.keys(heroSection).length >0&& <BlogHeroSection {...heroSection} />}

       {
        Object.keys(data).length >0 &&<BlogsSection {...data} />
       }
    </Layout>
  )
}

export const Head = ({ pageContext:{seoTitle, metaDescription}}) => (
  <Seo title={seoTitle} description={metaDescription} />
)

export default BlogsTemplate
