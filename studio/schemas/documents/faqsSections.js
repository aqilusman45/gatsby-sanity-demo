export default {
    title: 'FAQs Sections',
    name: 'faqsSections',
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
        title: 'Faqs',
        name: 'faqs',
        type: 'array',
        of: [
          {
            type: 'question',
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