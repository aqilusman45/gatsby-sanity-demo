  export default {
    title: 'Blog Categories',
    name: 'blogCategory',
    type: 'document',
    fields: [
      {
        title: 'SEO Title',
        name: 'seoTitle',
        type: 'string',
      },
      {
        title: 'Meta Description',
        name: 'metaDescription',
        type: 'text',
      },
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
  