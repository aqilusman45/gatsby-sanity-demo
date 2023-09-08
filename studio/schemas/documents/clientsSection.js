export default {
  title: 'Clients Sections',
  name: 'clientsSections',
  type: 'document',
  fields: [
    {
      title: 'Page Identifier',
      name: 'pageIdentifier',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Cards',
      name: 'cards',
      type: 'array',
      of: [
        {
          type: 'clientCard',
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'pageIdentifier',
      media: 'desktopImage',
    },
    prepare({title = 'No title'}) {
      return {
        title,
      }
    },
  },
}
