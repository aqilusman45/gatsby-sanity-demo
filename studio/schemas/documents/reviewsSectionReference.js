export default {
    title: 'Reviews Section Reference',
    name: 'reviewsSectionReference',
    type: 'document',
    fields: [
      {
        title: 'Identifier',
        name: 'identifier',
        type: 'string',
        validation: (Rule) => Rule.required(),
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