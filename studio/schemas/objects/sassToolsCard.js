export default {
  title: 'sassToolsCard',
  name: 'sassToolsCard',
  type: 'object',
  fields: [
    {
      title: 'tabName',
      name: 'tabName',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Logo',
      name: 'logo',
      type: 'customImage',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Name',
      name: 'name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'tabName',
    },
    prepare({title = 'No title'}) {
      return {
        title,
      }
    },
  },
}
