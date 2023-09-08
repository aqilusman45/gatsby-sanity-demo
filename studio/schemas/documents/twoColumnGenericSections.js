export default {
  title: 'Two Column Generic Sections',
  name: 'twoColumnGenericSections',
  type: 'document',
  fields: [
    {
      title: 'Identifier',
      name: 'identifier',
      type: 'string',
    },
    {
      title: 'Generic Sections',
      name: 'genericSections',
      type: 'genericSectionFields',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Background',
      name: 'isBackground',
      type: 'boolean',
      initialValue: false,
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
