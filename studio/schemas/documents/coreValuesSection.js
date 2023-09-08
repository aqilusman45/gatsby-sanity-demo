export default {
    title: 'Core Values Section',
    name: 'coreValuesSection',
    type: 'document',
    fields: [
      {
        title: 'Identifier',
        name: 'identifier',
        type: 'string',
        validation: (Rule) => Rule.required(),
      },
      {
        title: 'Heading',
        name: 'heading',
        type: 'string',
        validation: (Rule) => Rule.required(),
      },
      {
        title: 'Text',
        name: 'text',
        type: 'bodyPortableText',
        validation: (Rule) => Rule.required(),
      },

      {
        title: 'Sub Text',
        name: 'subText',
        type: 'string',
        validation: (Rule) => Rule.required(),
      },
      {
        title: 'Desktop Image',
        name: 'desktopImage',
        type: 'customImage',
        validation: (Rule) => Rule.required(),
      },
      {
        title: 'Mobile Image',
        name: 'mobileImage',
        type: 'customImage',
        validation: (Rule) => Rule.required(),
      },
      {
        title: 'Cards',
        name: 'cards',
        type: 'array',
        of: [
          {
            type: 'coreValuesCard',
          },
        ],
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
  