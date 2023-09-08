export default {
  title: 'Image',
  name: 'customImage',
  type: 'image',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      options: {
        isHighlighted: true,
      },
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
    },
    prepare({ title = 'No Title', media }) {
      return {
        title: label,
        media,
      }
    },
  },
}
