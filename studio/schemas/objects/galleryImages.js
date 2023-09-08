export default {
  title: 'Gallery Images',
  name: 'galleryImages',
  type: 'object',
  fields: [
    {
      title: 'Image',
      name: 'image',
      type: 'customImage',
    },
  ],
  preview: {
    select: {
      title: 'image.title',
    },
    prepare({title = 'No title'}) {
      return {
        title,
      }
    },
  },
}
