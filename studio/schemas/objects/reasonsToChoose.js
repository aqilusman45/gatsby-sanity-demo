export default {
    title: 'Reasons To Choose',
    name: 'reasonsToChoose',
    type: 'object',
    fields: [
      {
        title: 'Text',
        name: 'text',
        type: 'string',
        validation: (Rule) => Rule.required(),
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
  