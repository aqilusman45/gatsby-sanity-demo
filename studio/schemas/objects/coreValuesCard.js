export default {
    title: 'Core Values Card',
    name: 'coreValuesCard',
    type: 'object',
    fields: [
      {
        title: 'Sub Text',
        name: 'subText',
        type: 'bodyPortableText',
      },
      {
        title: 'Image Text',
        name: 'imagetext',
        type: 'string',
      },
     {
        title: 'Card Image',
        name: 'cardImage',
        type: 'customImage',
      },
    ],
    preview: {
      select: {
        title: 'cardImage.title',
      },
      prepare({title = 'No title'}) {
        return {
          title,
        }
      },
    },
  }
  