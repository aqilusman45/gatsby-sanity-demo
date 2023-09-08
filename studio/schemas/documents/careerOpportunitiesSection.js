export default {
    title: 'Career Opportunities Section',
    name: 'careerOpportunitiesSection',
    type: 'document',
    fields: [
      {
        title: 'Identifier',
        name: 'identifier',
        type: 'string',
        initialValue: 'Career Opportunities Section',
      },
      {
        title: 'Sub Text',
        name: 'subText',
        type: 'bodyPortableText',
        validation: (Rule) => Rule.required(),
      },
      {
        title: 'Cards',
        name: 'cards',
        type: 'array',
        of: [
          {
            type: 'careerOpportunitiesCard',
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
  