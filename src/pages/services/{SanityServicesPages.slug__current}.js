import { graphql } from 'gatsby'
import React from 'react'
import Seo from '../../components/seo'
import Layout from '../../components/Layout'
import EntryRenderer from '../../components/EntryRenderer/EntryRenderer'

const ServicesPages = (props) => {
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

export default ServicesPages

export const query = graphql`
query ServicesPagesQuery($id: String!) {
  page: sanityServicesPages(id: { eq: $id }) {
    __typename
    seoTitle
    metaDescription
    pageBuilder{
      ...HeroSection
      ...ClientsSection
      ...EstablishedEnterpriseSection
      ...WhyUsSection
      ...ProjectSections
      ...ProjectDeliverSection
      ...TestimonialsSection
      ...TechnologiesSection
      ...ProfileSection
      ...ContactUsSection
      ...FAQsSection
      ...MiniHeroSection
      ...ReviewsSection
      ...TechnologyHeroSection
      ...FrontEndConsultation
      ...ExprtiseSection
      ...PageDependentProfileSection
      ...BackendSections
      ...RequestSpecialistSection
      ...BenefitsSection
      ...TechSupportSection
      ...SassToolsSection
      ...BenefitsSection
      ...QualityAssurance
      ...ServicesIntroSection
    }
  }
}
`
