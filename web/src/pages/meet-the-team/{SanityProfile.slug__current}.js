import { graphql } from 'gatsby'
import React from 'react'
import Layout from '../../components/Layout/Layout'
import Seo from '../../components/seo'
import ProfileSection from '../../sections/ProfileSection/ProfileSection'


const ProfilePageTemplate = (props) => {
  const { data } = props
  const profile = data && data.sanityProfile

  return (
    <Layout> 
      <ProfileSection  {...profile}/>
    </Layout>
  )
}

export const Head = ({
  data: {
    sanityProfile: { seoTitle, metaDescription },
  },
}) => <Seo title={seoTitle} description={metaDescription} />

export default ProfilePageTemplate

export const query = graphql`
query ProfilePageQuery($id: String!) {
  sanityProfile(id: {eq: $id}) {
    __typename
    slug {
      current
    }
    identifier
    image {
      ...CustomImage
    }
    name
    position{
      title
    }
    location
    linkedinUrl
    githubUrl
    twitterUrl
    skills {
      title
    }
    industries {
      image {
        ...CustomImage
      }
    }
    technologies {
      image {
        ...CustomImage
      }
    }
    _rawAbout
    seoTitle
    metaDescription
  }
  site {
    siteMetadata {
      siteUrl
    }
  }
}
`