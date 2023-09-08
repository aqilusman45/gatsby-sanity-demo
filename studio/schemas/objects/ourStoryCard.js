export default {
    title: 'Our Story Card',
    name: 'ourStoryCard',
    type: 'object',
    fields: [
      {
        title: 'Year',
        name: 'year',
        type: 'string',
        validation: (Rule) => Rule.required(),
      },
      {
        title: 'Image Cards',
        name: 'imageCards',
        type: 'array',
        of:[
          {
            type:'storyImageCard'
          }
        ],
        validation: (Rule) =>
        Rule.required().custom((value) => {
          if (value.length > 3) {
            return 'Maximum of 3 Image Cards are allowed in Per Year'
          }
          return true
        }),
      },
    ],
    preview: {
      select: {
        year: 'year',
      },
      prepare({ year = 'No title' }) {
        return {
          title: year,
        }
      },
    },
  }