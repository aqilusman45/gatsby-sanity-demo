export default {
    title: 'Request Specialist Sections',
    name: 'requestSpecialistSection',
    type: 'document',
    fields: [
      {
        title: 'Identifier',
        name: 'identifier',
        type: 'string',
        validation: (Rule) => Rule.required(),
      },
      {
        title: 'Image',
        name: 'image',
        type: 'customImage',
        validation: (Rule) => Rule.required(),
      },
      {
        title: 'Sub Text',
        name: 'subText',
        type: 'bodyPortableText',
        validation: (Rule) => Rule.required(),
      },
      {
        title: 'Text',
        name: 'text',
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
        title: 'Cards',
        name: 'cards',
        type: 'array',
        of: [
          {
            type: 'stepObject',
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
  