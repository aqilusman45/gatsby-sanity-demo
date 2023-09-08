export default {
    title: 'Question',
    name: 'question',
    type: 'object',
    fields: [
      {
        title: 'Question',
        name: 'questionText',
        type: 'string',
        validation: (Rule) => Rule.required(),
      },
      {
        title: 'Answer',
        name: 'answer',
        type: 'bodyPortableText',
        validation: (Rule) => Rule.required(),
      },
    ],
    preview: {
      select: {
        questionText: 'questionText',
      },
      prepare({ questionText = 'No title' }) {
        return {
          title: questionText,
        }
      },
    },
  }