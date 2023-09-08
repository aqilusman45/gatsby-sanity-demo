const ANGLEBRACKETS_SECTIONS = [
    {
      sectionType: 'heroSections',
      sectionTitle: 'Hero Sections',
    },
    {
      sectionType: 'aboutGlobeSection',
      sectionTitle: 'About Globe Section',
    },
    {
      sectionType: 'clientsSections',
      sectionTitle: 'Clients Section',
    },
    {
      sectionType: 'establishedEnterpriseSection',
      sectionTitle: 'Established Enterprise',
    },
    {
      sectionType: 'whyUsSection',
      sectionTitle: 'Why Us Section',
    },
    {
      sectionType: 'projectSections',
      sectionTitle: 'Project Sections',
    },
    {
      sectionType: 'faqsSections',
      sectionTitle: 'FAQs Sections',
    },
    {
      sectionType: 'featuredBlogsSection',
      sectionTitle: 'Featured Blogs Section',
    },
    {
      sectionType: 'profileSections',
      sectionTitle: 'Profile Sections',
    },
    {
      sectionType: 'reviews',
      sectionTitle: 'Reviews',
    },
    {
      sectionType: 'testimonialsSections',
      sectionTitle: 'Testimonial Sections',
    },
  
    {
      sectionType: 'technologiesSections',
      sectionTitle: 'Technologies Sections',
    },
    {
      sectionType: 'twoColumnGenericSections',
      sectionTitle: 'Two Column Genenric Sections',
    },
    {
      sectionType: 'projectDeliverSection',
      sectionTitle: 'Project Deliver Section',
    },
  
    {
      sectionType: 'ContactUsSection',
      sectionTitle: 'Contact Us Section',
    },
    {
      sectionType: 'servicesCategory',
      sectionTitle: 'Services Category',
    },
    {
      sectionType: 'industriesCategory',
      sectionTitle: 'Industires Category',
    },
    {
      sectionType: 'technologiesCategories',
      sectionTitle: 'Technologies Category',
    },
    {
      sectionType: 'expertiseAreaSection',
      sectionTitle: 'Expertise Area Section',
    },
    {
      sectionType: 'technologiesHeroSection',
      sectionTitle: 'Technologies Hero Section',
    },
    {
      sectionType: 'sheduleForConsultation',
      sectionTitle: 'Shedule For Consultation',
    },
    {
      sectionType: 'skills',
      sectionTitle: 'Skills',
    },
    {
      sectionType: 'miniHeroSections',
      sectionTitle: 'Mini Hero Sections',
    },
    {
      sectionType: 'reviewsSectionReference',
      sectionTitle: 'Reviews Section Reference',
    },
    {
      sectionType: 'expertiseSections',
      sectionTitle: 'Expertise Sections',
    },
    {
      sectionType: 'backendSections',
      sectionTitle: 'Backend Sections',
    },
    {
      sectionType: 'benefitsSections',
      sectionTitle: 'Benefits Sections',
    },
    {
      sectionType: 'positions',
      sectionTitle: 'Positions',
    },
    {
      sectionType: 'pageDependentProfileSections',
      sectionTitle: 'Page Dependent Profile Sections',
    },
    {
      sectionType: 'requestSpecialistSection',
      sectionTitle: 'Request Specialist Section',
    },
    {
      sectionType: 'coreValuesSection',
      sectionTitle: 'Core Values Section',
    },
    {
      sectionType: 'careerGallerySection',
      sectionTitle: 'Career Gallery Section',
    },
    {
      sectionType: 'techSupportSections',
      sectionTitle: 'Tech Support Sections',
    },
    {
      sectionType: 'saasToolsSections',
      sectionTitle: 'Saas Tools Sections',
    },
    {
      sectionType: 'reasonsToChooseSection',
      sectionTitle: 'Reasons To Choose Section',
    },
    {
      sectionType: 'blogCategory',
      sectionTitle: 'Blog Category',
    },
    {
      sectionType: 'technologiesSectionReference',
      sectionTitle: 'Technologies Section Reference',
    },
    {
      sectionType: 'servicesSectionReference',
      sectionTitle: 'Services Section Reference',
    },
    {
      sectionType: 'authors',
      sectionTitle: 'Authors',
    },
    // {
    //   sectionType: 'reviewsSections',
    //   sectionTitle: 'Reviews Section',
    // },
    {
      sectionType: 'qualityAssuranceSection',
      sectionTitle: 'Qualtiy Assurance Section',
    },
    {
      sectionType: 'servicesIntroSection',
      sectionTitle: 'Services Intro Section',
    },
    {
      sectionType: 'servicesIntroCategories',
      sectionTitle: 'Services Intro Categories',
    },
    {
      sectionType: 'portfolioSection',
      sectionTitle: 'Portfolio Section',
    },
    {
      sectionType: 'portfolioCategory',
      sectionTitle: 'Portfolio Category',
    },
    {
      sectionType: 'aboutHeroSection',
      sectionTitle: 'About Hero Section',
    },
    {
      sectionType: 'careerOpportunitiesSection',
      sectionTitle: 'Career Opportunities Section',
    },
    {
      sectionType: 'careerProcessSection',
      sectionTitle: 'Career Process Section',
    },
    {
      sectionType: 'meetTheTeamSection',
      sectionTitle: 'Meet The Team Section',
    },
    {
      sectionType: 'blogsHeroSection',
      sectionTitle: 'Blogs Hero Section',
    },
    {
      sectionType: 'blogsHubSectionReference',
      sectionTitle: 'Blogs Hub Section Reference',
    },
  ]
  
  const ANGLEBRACKETS_TEMPLATE = [
    {
      templateType: 'pages',
      templateTitle: 'Pages',
    },
    {
      templateType: 'blogs',
      templateTitle: 'Blogs',
    },
    // {
    //   templateType: 'industriesPages',
    //   templateTitle: 'Industries Pages',
    // },
    {
      templateType: 'technologiesPages',
      templateTitle: 'Technologies Pages',
    },
    {
      templateType: 'profile',
      templateTitle: 'Profile Pages',
    },
    {
      templateType: 'servicesPages',
      templateTitle: 'Services Pages',
    },
    {
      templateType: 'portfolio',
      templateTitle: 'Portfolio Pages',
    },
  ]
  
  export const myStructure = (S) =>
    S.list()
      .title('Websites')
      .items([
        S.listItem()
          .title('AngleBrackets')
          .child(
            S.list()
              .title('AngleBrackets')
              .items([
                S.listItem()
                  .title('Sections')
                  .child(
                    S.list()
                      .title('Sections')
                      .items(
                        ANGLEBRACKETS_SECTIONS.map((section) => {
                          return S.listItem()
                            .title(section.sectionTitle)
                            .child(S.documentTypeList(section.sectionType))
                        })
                      )
                  ),
                S.listItem()
                  .title('Templates')
                  .child(
                    S.list()
                      .title('Templates')
                      .items(
                        ANGLEBRACKETS_TEMPLATE.map((section) => {
                          return S.listItem()
                            .title(section.templateTitle)
                            .child(S.documentTypeList(section.templateType))
                        })
                      )
                  ),
              ])
          ),
        S.divider(),
      ])
  