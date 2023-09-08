export default {
  name: 'technologiesPages',
  type: 'document',
  title: 'Technologies Pages',
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
      title: 'Type',
      name: 'type',
      type: 'string',
      validation: (Rule) =>
        Rule.custom((variant) => (variant === undefined ? 'This field must not be empty.' : true)),
      options: {
        list: [
          {title: 'Front-End', value: 'front-end'},
          {title: 'Back-End', value: 'back-end'},
          {title: 'Mobile Application', value: 'mobile-application'},
        ],
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
          title: 'Technologies Hero Section',
          name: 'technologiesHeroSection',
          type: 'reference',
          validation: (Rule) => Rule.required(),
          options: {
            disableNew: true,
          },
          to: [{type: 'technologiesHeroSection'}],
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
          title: 'Why Us Sections',
          name: 'whyUsSection',
          type: 'reference',
          validation: (Rule) => Rule.required(),
          options: {
            disableNew: true,
          },
          to: [{type: 'whyUsSection'}],
        },
        {
          title: 'Project Sections',
          name: 'projectSections',
          type: 'reference',
          validation: (Rule) => Rule.required(),
          options: {
            disableNew: true,
          },
          to: [{type: 'projectSections'}],
        },
        {
          title: 'Project Deliver Sections',
          name: 'projectDeliverSection',
          type: 'reference',
          validation: (Rule) => Rule.required(),
          options: {
            disableNew: true,
          },
          to: [{type: 'projectDeliverSection'}],
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
