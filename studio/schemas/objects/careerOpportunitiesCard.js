export default {
    title: 'Career Opportunities Card',
    name: 'careerOpportunitiesCard',
    type: 'object',
    fields: [
      {
        title: 'tabName',
        name: 'tabName',
        type: 'reference',
        to:[
            {
                type:'technologiesCategories'
            }
        ],
        validation: (Rule) => Rule.required(),
      },
      {
        title: 'Heading',
        name: 'heading',
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
        title: 'Button',
        name: 'button',
        type: 'button',
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
  