  export default {
    title: 'Portfolio Categories',
    name: 'portfolioCategory',
    type: 'document',
    fields: [
      {
        title: 'Category',
        name: 'category',
        type: 'string',
      },
    ],
    preview: {
      select: {
        title: 'category',
      },
    },
  }
  