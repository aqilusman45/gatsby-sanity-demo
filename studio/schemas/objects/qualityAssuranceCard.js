export default {
    title: 'Quality Assurance Card',
    name: 'qualityAssuranceCard',
    type: 'object',
    fields: [
      {
        title: 'Logo',
        name: 'logo',
        type: 'customImage',
        validation: (Rule) => Rule.required(),
      },
      {
        title: 'Heading',
        name: 'heading',
        type: 'string',
      },
      {
        title: 'Qualities',
        name: 'qualities',
        type: 'checklistObject',
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
  