export default {
    title: 'Powering Card Object',
    name: 'poweringCardObject',
    type: 'object',
    fields: [
      {
        title: 'Name',
        name: 'name',
        type: 'string',
      },
      {
        title: 'Logo',
        name: 'logo',
        type: 'customImage',
      },
      {
        title: 'Slug',
        description: 'Exclude leading and trailing backslashes',
        name: 'slug',
        type: 'slug',
        validation: (Rule) => Rule.required(),
        options: {
          source: 'name',
            isUnique: () => true,
        },
      },
    ],
    preview: {
      select: {
        title: 'name',
      },
      prepare({title = 'No title'}) {
        return {
          title
        }
      },
    },
  }
  