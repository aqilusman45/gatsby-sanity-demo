export default {
  title: 'profileObject',
  name: 'profileObject',
  type: 'object',
  fields: [
    {
      title: 'Tab',
      name: 'tab',
      type: 'reference',
      validation: (Rule) => Rule.required(),
      options: {
        disableNew: true,
      },
      to: [{type: 'servicesCategory'}],
    },
    {
      title: 'Profiles',
      name: 'profiles',
      type: 'reference',
      to: [
          {type: 'profile'}
      ],
    },
  ],
  preview: {
    select: {
      label: 'tab.category',
    },
    prepare({label = 'No Label'}) {
      return {
        title: label,
      }
    },
  },
}
