export default {
  title: 'Two Column Heroes',
  name: 'twoColumnHeroes',
  type: 'document',
  fields: [
    {
      title: 'Identifier',
      name: 'identifier',
      type: 'string',
    },
    {
      title: 'Background',
      name: 'isBackground',
      type: 'boolean',
      initialValue: false,
    },
    {
      title: 'Content',
      name: 'content',
      type: 'genericSectionFields',
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'identifier',
    },
    prepare({title = 'No title', media}) {
      return {
        title,
        media,
      }
    },
  },
}
