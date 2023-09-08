import { graphql } from 'gatsby'
import React from 'react'
import Layout  from '../../components/Layout'
import EntryRenderer from '../../components/EntryRenderer/EntryRenderer'
import Seo from '../../components/seo'


const TechnologiesPage = (props) => {
  return (
    <Layout>
      <EntryRenderer pageBuilderData={props.data.page.pageBuilder} />
    </Layout>
  )
}

export const Head = ({
  data: {
    page: { seoTitle, metaDescription },
  },
}) => <Seo title={seoTitle} description={metaDescription} />

export default TechnologiesPage

export const query = graphql`
query technologiesQuery($id: String!) {
  page: sanityTechnologiesPages(id: { eq: $id }) {
    __typename
    seoTitle
    metaDescription
    pageBuilder{
      ...TechnologyHeroSection
      ...EstablishedEnterpriseSection
      ...FrontEndConsultation
      ...ExprtiseSection
      ...ContactUsSection
      ...TestimonialsSection
      ...ProfileSection
      ...PageDependentProfileSection
      ...BackendSections
      ...WhyUsSection
      ...ProjectSections
      ...ProjectDeliverSection

    }
  }
}
`
