export default {
  title: 'Client Card',
  name: 'clientCard',
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
    {
      title: 'Slug',
      description: 'Exclude leading and trailing backslashes',
      name: 'slug',
      type: 'slug',
      validation: (Rule) => Rule.required(),
      options: {
        source: 'title',
        maxLength: 200,
        slugify: (input) => input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
      },
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
