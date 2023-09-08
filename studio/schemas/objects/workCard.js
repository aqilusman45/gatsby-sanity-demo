export default {
  title: 'Work Card',
  name: 'workCard',
  type: 'object',
  fields: [
    {
      title: 'Tab',
      name: 'tab',
      type: 'reference',
      validation: (Rule) => Rule.required(),
      options: {
        disableNew: true,
      },
      to: [{type: 'servicesCategory'}],
    },
    {
      title: 'Heading',
      name: 'heading',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Sub Text',
      name: 'subText',
      type: 'bodyPortableText',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Hover Image',
      name: 'hoverImage',
      type: 'customImage',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Techonlogies',
      name: 'technologies',
      type: 'array',
      of: [
        {         
          type: 'reference',
          to: [{type: 'technologiesCategories'}],
        }]
    },
  ],
  preview: {
    select: {
      title: 'heading',
    },
    prepare({title = 'No title'}) {
      return {
        title,
      }
    },
  },
}
