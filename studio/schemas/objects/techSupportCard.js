export default {
  title: 'Tech Support Card',
  name: 'techSupportCard',
  type: 'object',
  fields: [
    {
      title: 'Heading',
      name: 'heading',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Services',
      name: 'services',
      type: 'checklistObject',
      validation: (Rule) => Rule.required(),
     
    },
  ],
  preview: {
    select: {
      title: 'heading',
    },
    prepare({title = 'No title'}) {
      return {
        title,
      }
    },
  },
}
