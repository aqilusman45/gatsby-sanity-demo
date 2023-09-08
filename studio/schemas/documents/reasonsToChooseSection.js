export default {
    title: 'Reasons To Choose Section',
    name: 'reasonsToChooseSection',
    type: 'document',
    fields: [
      {
        title: 'Identifier',
        name: 'identifier',
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
        title: 'Reasons',
        name: 'reasons',
        type: 'array',
        of: [
          {
            type: 'reasonsToChoose',
          },
        ],
      },
    ],
    preview: {
      select: {
        title: 'identifier',
      },
      prepare({ title = 'No title' }) {
        return {
          title,
        }
      },
    },
  }