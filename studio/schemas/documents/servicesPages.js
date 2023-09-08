export default {
  name: 'servicesPages',
  type: 'document',
  title: 'Services Pages',
  fields: [
    {
      title: 'SEO Title',
      name: 'seoTitle',
      type: 'string',
    },
    {
      title: 'Meta Description',
      name: 'metaDescription',
      type: 'text',
    },
    {
      title: 'Slug',
      description: 'Exclude leading and trailing backslashes',
      name: 'slug',
      type: 'slug',
      validation: (Rule) => Rule.required(),
      options: {
        source: 'title',
        maxLength: 200,
        slugify: (input) => input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
      },
    },
    {
      title: 'Indexed',
      name: 'isIndexed',
      type: 'boolean',
      initialValue: true,
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Description',
      name: 'description',
      type: 'string',
      validation: Rule => Rule.required().max(200).error(`A title shouldn't be more than 120 characters.`)

    },
    {
      title: 'Image',
      name: 'image',
      type: 'customImage',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'pageBuilder',
      type: 'array',
      title: 'Page Builder',
      of: [
        {
          title: 'Two Column Generic Section',
          name: 'twoColumnGenericSections',
          type: 'reference',
          validation: (Rule) => Rule.required(),
          options: {
            disableNew: true,
          },
          to: [{type: 'twoColumnGenericSections'}],
        },
        {
          title: 'Services Intro Section',
          name: 'servicesIntroSection',
          type: 'reference',
          validation: (Rule) => Rule.required(),
          options: {
            disableNew: true,
          },
          to: [{type: 'servicesIntroSection'}],
        },
        {
          title: 'Why Us Section Section',
          name: 'whyUsSection',
          type: 'reference',
          validation: (Rule) => Rule.required(),
          options: {
            disableNew: true,
          },
          to: [{type: 'whyUsSection'}],
        },
        {
          title: 'Profile Section',
          name: 'profileSections',
          type: 'reference',
          validation: (Rule) => Rule.required(),
          options: {
            disableNew: true,
          },
          to: [{type: 'profileSections'}],
        },
        {
          title: 'Contact Us Section',
          name: 'ContactUsSection',
          type: 'reference',
          validation: (Rule) => Rule.required(),
          options: {
            disableNew: true,
          },
          to: [{type: 'ContactUsSection'}],
        },
        {
          title: 'Established Enterprise Section',
          name: 'establishedEnterpriseSection',
          type: 'reference',
          validation: (Rule) => Rule.required(),
          options: {
            disableNew: true,
          },
          to: [{type: 'establishedEnterpriseSection'}],
        },
        {
          title: 'Technology Hero Section',
          name: 'technologiesHeroSection',
          type: 'reference',
          validation: (Rule) => Rule.required(),
          options: {
            disableNew: true,
          },
          to: [{type: 'technologiesHeroSection'}],
        },
        {
          title: 'Shedule For Consultation',
          name: 'sheduleForConsultation',
          type: 'reference',
          validation: (Rule) => Rule.required(),
          options: {
            disableNew: true,
          },
          to: [{type: 'sheduleForConsultation'}],
        },
        {
          title: 'Expertise Sections',
          name: 'expertiseSections',
          type: 'reference',
          validation: (Rule) => Rule.required(),
          options: {
            disableNew: true,
          },
          to: [{type: 'expertiseSections'}],
        },
        {
          title: 'Page Dependent Profile Section',
          name: 'pageDependentProfileSections',
          type: 'reference',
          validation: (Rule) => Rule.required(),
          options: {
            disableNew: true,
          },
          to: [{type: 'pageDependentProfileSections'}],
        },
        {
          title: 'Backend Sections',
          name: 'backendSections',
          type: 'reference',
          validation: (Rule) => Rule.required(),
          options: {
            disableNew: true,
          },
          to: [{type: 'backendSections'}],
        },
        {
          title: 'Project Section',
          name: 'projectSections',
          type: 'reference',
          validation: (Rule) => Rule.required(),
          options: {
            disableNew: true,
          },
          to: [{type: 'projectSections'}],
        },
        {
          title: 'Testimonials Section',
          name: 'testimonialsSections',
          type: 'reference',
          validation: (Rule) => Rule.required(),
          options: {
            disableNew: true,
          },
          to: [{type: 'testimonialsSections'}],
        },
        {
          title: 'Technologies Sections',
          name: 'technologiesSections',
          type: 'reference',
          validation: (Rule) => Rule.required(),
          options: {
            disableNew: true,
          },
          to: [{type: 'technologiesSections'}],
        },
        {
          title: 'Featured Blogs Section',
          name: 'featuredBlogsSection',
          type: 'reference',
          validation: (Rule) => Rule.required(),
          options: {
            disableNew: true,
          },
          to: [{type: 'featuredBlogsSection'}],
        },
        {
          title: 'Hero Sections',
          name: 'heroSections',
          type: 'reference',
          validation: (Rule) => Rule.required(),
          options: {
            disableNew: true,
          },
          to: [{type: 'heroSections'}],
        },
        {
          title: 'Clients Sections',
          name: 'clientsSections',
          type: 'reference',
          validation: (Rule) => Rule.required(),
          options: {
            disableNew: true,
          },
          to: [{type: 'clientsSections'}],
        },
        {
          title: 'Reviews Section',
          name: 'reviewsSections',
          type: 'reference',
          validation: (Rule) => Rule.required(),
          options: {
            disableNew: true,
          },
          to: [{type: 'reviewsSections'}],
        },
        {
          title: 'Project Deliver Section',
          name: 'projectDeliverSection',
          type: 'reference',
          validation: (Rule) => Rule.required(),
          options: {
            disableNew: true,
          },
          to: [{type: 'projectDeliverSection'}],
        },
        {
          title: 'FAQs Section',
          name: 'faqsSections',
          type: 'reference',
          validation: (Rule) => Rule.required(),
          options: {
            disableNew: true,
          },
          to: [{type: 'faqsSections'}],
        },
        {
          title: 'Mini Hero Sections',
          name: 'miniHeroSections',
          type: 'reference',
          validation: (Rule) => Rule.required(),
          options: {
            disableNew: true,
          },
          to: [{type: 'miniHeroSections'}],
        },
        {
          title: 'Reviews Section Reference',
          name: 'reviewsSectionReference',
          type: 'reference',
          validation: (Rule) => Rule.required(),
          options: {
            disableNew: true,
          },
          to: [{type: 'reviewsSectionReference'}],
        },
        {
          title: 'Request Specialist Section',
          name: 'requestSpecialistSection',
          type: 'reference',
          validation: (Rule) => Rule.required(),
          options: {
            disableNew: true,
          },
          to: [{type: 'requestSpecialistSection'}],
        },
        {
          title: 'Benefits Sections',
          name: 'benefitsSections',
          type: 'reference',
          validation: (Rule) => Rule.required(),
          options: {
            disableNew: true,
          },
          to: [{type: 'benefitsSections'}],
        },
        {
          title: 'Tech Support Sections',
          name: 'techSupportSections',
          type: 'reference',
          validation: (Rule) => Rule.required(),
          options: {
            disableNew: true,
          },
          to: [{type: 'techSupportSections'}],
        },
        {
          title: 'Saas Tools Sections',
          name: 'saasToolsSections',
          type: 'reference',
          validation: (Rule) => Rule.required(),
          options: {
            disableNew: true,
          },
          to: [{type: 'saasToolsSections'}],
        },
        {
          title: 'Quality Assurance Section',
          name: 'qualityAssuranceSection',
          type: 'reference',
          validation: (Rule) => Rule.required(),
          options: {
            disableNew: true,
          },
          to: [{type: 'qualityAssuranceSection'}],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({title = 'No title'}) {
      return {
        title,
      }
    },
  },
}
