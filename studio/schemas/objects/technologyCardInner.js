export default {
  title: 'Technology Card Inner',
  name: 'technologyCardInner',
  type: 'object',
  fields: [
    {
      title: 'Tab',
      name: 'tab',
      type: 'reference',
      validation: (Rule) => Rule.required(),
      to: [{type: 'servicesCategory'}],
    },
    {
      title: 'Cards',
      name: 'cards',
      type: 'whyUsCard',
    },
  ],
  preview: {
    select: {
      title: 'tab.category',
    },
    prepare({title = 'No title'}) {
      return {
        title,
      }
    },
  },
}
