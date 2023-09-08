export default {
    title: 'Technologies Hero Section',
    name: 'technologiesHeroSection',
    type: 'document',
    fields: [
      {
        title: 'Identifier',
        name: 'identifier',
        type: 'string',
      },
      {
        title: 'Main Heading',
        name: 'mainHeading',
        type: 'string',
      },
      {
        title: 'Sub Text',
        name: 'subText',
        type: 'bodyPortableText',
        validation: (Rule) => Rule.required(),
      },
      {
        title: 'Desktop Image',
        name: 'desktopImage',
        type: 'customImage',
        validation: (Rule) => Rule.required(),
      },
      {
        title: 'mobileImage',
        name: 'mobileImage',
        type: 'customImage',
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
  