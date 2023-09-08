export default{
    title: 'Image Card',
    name: 'imageCard',
    type: 'object',
    fields: [
      {
        title: 'Identifier',
        name: 'identifier',
        type: 'string',
      },
      {
        title: 'Image',
        name: 'image',
        type: 'customImage',
      },
    ],
    preview: {
      select: {
        title: 'identifier',
      },
    },  
    
  }
  