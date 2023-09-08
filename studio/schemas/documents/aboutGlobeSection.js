export default {
    title: 'About Globe Section',
    name: 'aboutGlobeSection',
    type: 'document',
    fields: [
      {
        title: 'Identifier',
        name: 'identifier',
        type: 'string',
        validation: (Rule) => Rule.required(),
      },
      {
        title: 'Text',
        name: 'text',
        type: 'bodyPortableText',
        validation: (Rule) => Rule.required(),
      },{
        title: 'Globe Image',
        name: 'globeImage',
        type: 'customImage',
        validation: (Rule) => Rule.required(),
      },
    ],
    preview: {
      select: {
        title: 'identifier',
      },
      prepare({title = 'No title'}) {
        return {
          title,
        }
      },
    },
  }
  