export default {
    title: 'Project Card',
    name: 'projectCard',
    type: 'object',
    fields: [
      {
        title: 'Count',
        name: 'count',
        type: 'string',
      },
      {
        title: 'Labels',
        name: 'labels',
        type: 'string',
      },
     
    ],
    preview: {
      select: {
        title: 'labels',
      },
      prepare({title = 'No title'}) {
        return {
          title,
        }
      },
    },
  }
  