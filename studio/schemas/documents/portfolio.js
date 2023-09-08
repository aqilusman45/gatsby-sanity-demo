export default {
  title: 'Portfolio',
  name: 'portfolio',
  type: 'document',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Button',
      name: 'button',
      type: 'button',
      of: [
        {
          type: 'button',
        },
      ],
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
      title: 'Description',
      name: 'description',
      type: 'bodyPortableText',
    },
    {
      title: 'Techonlogies',
      name: 'technologies',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'technologiesCategories'}],
        },
      ],
      validation: (Rule) =>
        Rule.required().custom((value) => {
          if (value.length > 8) {
            return 'Maximum of 8 Technologies are allowed Per Card'
          }
          return true
        }),
    },
    {
      title: 'SEO Title',
      name: 'seoTitle',
      type: 'string',
    },
    {
      title: 'Button Title',
      name: 'buttonTitle',
      type: 'string',
    },
    {
      title: 'Meta Description',
      name: 'metaDescription',
      type: 'text',
    },
    {
      title: 'Desktop Image',
      name: 'desktopImage',
      type: 'customImage',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Portfolio Category',
      name: 'portfolioCategory',
      type: 'array',
      of: [
        {         
          type: 'reference',
          to: [{type: 'portfolioCategory'}],
        }],
        validation: (Rule) => Rule.required(),
    },
    {
      title: 'Body',
      name: 'body',
      type: 'bodyPortableText',
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
