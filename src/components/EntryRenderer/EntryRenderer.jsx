import React from 'react'
import HeroSection from '../../sections/HeroSection/HeroSection'
import { ClientsSection } from '../../sections/ClientsSection'
import EstablishedEnterpriceSection from '../../sections/EstablishedEnterpriseSection/EstablishedEnterpriceSection'
import WhyAngleBracketsSection from '../../sections/WhyAngleBracketsSection/WhyAngleBracketsSection'
import AngelBracketProjectSection from '../../sections/AngelBracketProjectSection/AngelBracketProjectSection'
import TestimonialsSection from '../../sections/TestimonialsSection/TestimonialsSection'
import TechnologiesForDevelopmentSection from '../../sections/TechnologiesForDevelopmentSection/TechnologiesForDevelopmentSection'
import ProjectDeliverSection from '../../sections/ProjectDeliverSection/ProjectDeliverSection'
import AngleBracketsDevelopers from '../../sections/AngleBracketsDevelopers/AngleBracketsDevelopers'
import ConsultationSection from '../../sections/ConsultationSection/ConsultationSection'
import TechnologiesHeroSection from '../../sections/TechnologiesHeroSection/TechnologiesHeroSection'
import SheduleForConsultation from '../../sections/SheduleForConsultation/SheduleForConsultation'
import FaQsSection from '../../sections/FaQsSection/FaQsSection'
import MiniHeroSection from '../../sections/MiniHeroSection/MiniHeroSection'
import ReviewsSection from '../../sections/ReviewsSection/ReviewsSection'
import AngleBracketsExpertise from '../../sections/AngleBracketsExpertise/AngleBracketsExpertise'
import PageDependentProfileSection from '../../sections/PageDependentProfileSection/PageDependentProfileSection'
import DevelopmentScopeSection from '../../sections/DevelopmentScopeSection/DevelopmentScopeSection'
import RequestSpecialistsSection from '../../sections/RequestSpecialistsSection/RequestSpecialistsSection'
import BenefitsSection from '../../sections/BenefitsSection/BenefitsSection'
import TechSupport from '../../sections/TechSupport/TechSupport'
import SaasToolsSection from '../../sections/SaasToolsSection/SaasToolsSection'
import QualityAssuranceSection from '../../sections/QualityAssuranceSection/QualityAssuranceSection'
import ServicesIntroSection from '../../sections/ServicesIntroSection/ServicesIntroSection'
import PortfolioSection from '../../sections/PortfolioSection/PortfolioSection'
import AboutGlobeSection from '../../sections/AboutGlobeSection/AboutGlobeSection'
import ExpertiseAreaSection from '../../sections/ExpertiseAreaSection/ExpertiseAreaSection'
import CareerGallerySection from '../../sections/CareerGallerySection/CareerGallerySection'
import CoreValuesSection from '../../sections/CoreValuesSection/CoreValuesSection'
import AboutHeroSection from '../../sections/AboutHeroSection/AboutHeroSection'
import ReasonsToChooseSection from '../../sections/ReasonsToChooseSection/ReasonsToChooseSection'
import CareerOpportunitiesSection from '../../sections/CareerOpportunitiesSection/CareerOpportunitiesSection'
import CareerProcessSection from '../../sections/CareerProcessSection/CareerProcessSection'
import ServicesSection from '../../sections/ServicesSection/ServicesSection'
import TechnologiesSection from '../../sections/TechnologiesSection/TechnologiesSection'
import MeetTheTeamSection from '../../sections/MeetTheTeamSection/MeetTheTeamSection'
import BlogsHubSection from '../../sections/BlogsHubSection/BlogsHubSection'

const EntryRenderer = ({ pageBuilderData, ...props }) => {
  return pageBuilderData.map(({ __typename, ...sectionData }, index) => {
    switch (__typename) {
      case 'SanityHeroSections':
        return <HeroSection key={__typename} {...sectionData} {...props} />
      case 'SanityClientsSections':
        return <ClientsSection key={__typename} {...sectionData} {...props} />
      case 'SanityEstablishedEnterpriseSection':
        return (
          <EstablishedEnterpriceSection
            key={__typename}
            {...sectionData}
            {...props}
          />
        )
      case 'SanityWhyUsSection':
        return (
          <WhyAngleBracketsSection
            key={__typename}
            {...sectionData}
            {...props}
          />
        )
      case 'SanityProjectSections':
        return (
          <AngelBracketProjectSection
            key={__typename}
            {...sectionData}
            {...props}
          />
        )
      case 'SanityTestimonialsSections':
        return (
          <TestimonialsSection key={__typename} {...sectionData} {...props} />
        )
      case 'SanityTechnologiesSections':
        return (
          <TechnologiesForDevelopmentSection
            key={__typename}
            {...sectionData}
            {...props}
          />
        )
      case 'SanityProjectDeliverSection':
        return (
          <ProjectDeliverSection key={__typename} {...sectionData} {...props} />
        )
      case 'SanityProfileSections':
        return (
          <AngleBracketsDevelopers
            key={__typename}
            {...sectionData}
            {...props}
          />
        )
      case 'SanityContactUsSection':
        return (
          <ConsultationSection key={__typename} {...sectionData} {...props} />
        )
      case 'SanityTechnologiesHeroSection':
        return (
          <TechnologiesHeroSection
            key={__typename}
            {...sectionData}
            {...props}
          />
        )
      case 'SanitySheduleForConsultation':
        return (
          <SheduleForConsultation
            key={__typename}
            {...sectionData}
            {...props}
          />
        )
      case 'SanityFaqsSections':
        return <FaQsSection key={__typename} {...sectionData} {...props} />
      case 'SanityMiniHeroSections':
        return <MiniHeroSection key={__typename} {...sectionData} {...props} />
      case 'SanityReviewsSectionReference':
        return <ReviewsSection key={__typename} {...sectionData} {...props} />
      case 'SanityExpertiseSections':
        return (
          <AngleBracketsExpertise
            key={__typename}
            {...sectionData}
            {...props}
          />
        )
      case 'SanityPageDependentProfileSections':
        return (
          <PageDependentProfileSection
            key={__typename}
            {...sectionData}
            {...props}
          />
        )
      case 'SanityBackendSections':
        return (
          <DevelopmentScopeSection
            key={__typename}
            {...sectionData}
            {...props}
          />
        )
      case 'SanityRequestSpecialistSection':
        return (
          <RequestSpecialistsSection
            key={__typename}
            {...sectionData}
            {...props}
          />
        )
      case 'SanityBenefitsSections':
        return <BenefitsSection key={__typename} {...sectionData} {...props} />
      case 'SanityTechSupportSections':
        return <TechSupport key={__typename} {...sectionData} {...props} />
      case 'SanitySaasToolsSections':
        return <SaasToolsSection key={__typename} {...sectionData} {...props} />
      case 'SanityAboutGlobeSection':
        return (
          <AboutGlobeSection key={__typename} {...sectionData} {...props} />
        )
      case 'SanityExpertiseAreaSection':
        return (
          <ExpertiseAreaSection key={__typename} {...sectionData} {...props} />
        )
      case 'SanityQualityAssuranceSection':
        return (
          <QualityAssuranceSection
            key={__typename}
            {...sectionData}
            {...props}
          />
        )
      case 'SanityServicesIntroSection':
        return (
          <ServicesIntroSection key={__typename} {...sectionData} {...props} />
        )
      case 'SanityCareerGallerySection':
        return (
          <CareerGallerySection key={__typename} {...sectionData} {...props} />
        )
      case 'SanityPortfolioSection':
        return <PortfolioSection key={__typename} {...sectionData} {...props} />
      case 'SanityCoreValuesSection':
        return (
          <CoreValuesSection key={__typename} {...sectionData} {...props} />
        )
      case 'SanityAboutHeroSection':
        return <AboutHeroSection key={__typename} {...sectionData} {...props} />
      case 'SanityCareerOpportunitiesSection':
        return (
          <CareerOpportunitiesSection
            key={__typename}
            {...sectionData}
            {...props}
          />
        )
      case 'SanityReasonsToChooseSection':
        return (
          <ReasonsToChooseSection
            key={__typename}
            {...sectionData}
            {...props}
          />
        )

      case 'SanityCareerProcessSection':
        return (
          <CareerProcessSection key={__typename} {...sectionData} {...props} />
        )
      case 'SanityServicesSectionReference':
        return <ServicesSection key={__typename} {...sectionData} {...props} />
      case 'SanityMeetTheTeamSection':
        return <MeetTheTeamSection key={__typename} {...sectionData} {...props} />
        case 'SanityBlogsHubSectionReference':
          return <BlogsHubSection key={__typename} {...sectionData} {...props} />
      case 'SanityTechnologiesSectionReference':
        return (
          <TechnologiesSection key={__typename} {...sectionData} {...props} />
        )
      default:
        return null
    }
  })
}

export default EntryRenderer
