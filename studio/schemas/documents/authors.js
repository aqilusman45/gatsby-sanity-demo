export default {
  title: 'Blog Authors',
  name: 'authors',
  type: 'document',
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'string',
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'customImage',
    },
  },
}
