export default {
  title: 'Checklist',
  name: 'checklistObject',
  type: 'object',
  fields: [
    {
      name: 'list',
      title: 'List',
      type: 'array',
      of: [{type: 'string'}],
    },
  ],
  preview: {
    select: {
      title: 'preChecklistText',
    },
    prepare({title = 'No Title'}) {
      return {
        title: title,
      }
    },
  },
}
