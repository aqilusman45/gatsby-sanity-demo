export default {
    title: 'About Hero Section',
    name: 'aboutHeroSection',
    type: 'document',
    fields: [
      {
        title: 'Identifier',
        name: 'identifier',
        type: 'string',
      },
      {
        title: 'Sub Text',
        name: 'subText',
        type: 'bodyPortableText',
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
        title: 'Cards',
        name: 'cards',
        type: 'array',
        of: [
          {
            type: 'projectCard',
          },
        ],
      },
      {
        title: 'Is Decorator',
        name: 'isDecorator',
        type: 'boolean',
        initialValue: true,
        validation: (Rule) => Rule.required(),
      },
      {
        title: 'Large Padding',
        name: 'isLargePadding',
        type: 'boolean',
        initialValue: true,
        validation: (Rule) => Rule.required(),
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
  