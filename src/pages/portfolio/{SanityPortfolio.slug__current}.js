import { graphql } from 'gatsby'
import React from 'react'
import PortfolioPageSection from '../../sections/PortfolioPageSection/PortfolioPageSection'
import Layout from '../../components/Layout/Layout'
import Seo from '../../components/seo'



const PortfolioPageTemplate = (props) => {
  const { data } = props
  const portfolio = data && data.sanityPortfolio

  return (
    <Layout> 
      <PortfolioPageSection  {...portfolio}/>
    </Layout>
  )
}

export const Head = ({
  data: {
    sanityPortfolio: { seoTitle, metaDescription },
  },
}) => <Seo title={seoTitle} description={metaDescription} />

export default PortfolioPageTemplate

export const query = graphql`
query PortfolioPageQuery($id: String!) {
  sanityPortfolio(id: {eq: $id}) {
    slug {
      current
    }
    button {
      ...Button
    }
    seoTitle
    metaDescription
    __typename
    title
    technologies {
      category
    }
    desktopImage {
      ...CustomImage
    }
    portfolioCategory {
      category
    }
    _rawBody
  }
  site {
    siteMetadata {
      siteUrl
    }
  }
}
`