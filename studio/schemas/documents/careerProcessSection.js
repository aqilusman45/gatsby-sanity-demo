export default {
    title: 'Career Process Section',
    name: 'careerProcessSection',
    type: 'document',
    fields: [
      {
        title: 'Identifier',
        name: 'identifier',
        type: 'string',
        validation: (Rule) => Rule.required(),
      },
      {
        title: 'Text',
        name: 'text',
        type: 'bodyPortableText',
        validation: (Rule) => Rule.required(),
      },
      
      {
        title: 'Steps',
        name: 'steps',
        type: 'array',
        validation: (Rule) =>
        Rule.required().custom((value) => {
          if (value.length > 3) {
            return 'Maximum of 3 steps are allowed'
          }
          return true
        }),
        of:[
          {
            type:'stepObject'
          }
        ]
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
  