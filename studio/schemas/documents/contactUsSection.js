export default {
  title: 'Contact Us Section',
  name: 'ContactUsSection',
  type: 'document',
  fields: [
    {
      title: 'Identifier',
      name: 'identifier',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'IsDarkTheme',
      name: 'isDarkTheme',
      type: 'boolean',
      initialValue: false,
      validation: (Rule) => Rule.required(),
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
      title: 'Steps',
      name: 'steps',
      type: 'array',
      of: [{type: 'stepObject'}],
      validation: (Rule) =>
      Rule.required().custom((value) => {
        if (value.length > 4) {
          return 'Maximum of 3 Cards are allowed in this Section'
        }
        return true
      }),
    },
  ],
  preview: {
    select: {
      title: 'identifier',
    },
    prepare({title = 'No title'}) {
      return {
        title,
      }
    },
  },
}
