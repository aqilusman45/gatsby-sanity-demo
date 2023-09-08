export default {
  title: 'Expertise Area Card',
  name: 'expertiseAreaCard',
  type: 'object',
  fields: [
    {
      title: 'Expertise Logo',
      name: 'expertiseLogo',
      type: 'customImage',
      validation: (Rule) => Rule.required(),
    },
    {
        title: 'Heading',
        name: 'heading',
        type: 'string',
      },
    {
      title: 'Sub Text',
      name: 'subText',
      type: 'bodyPortableText',
    },
    {
      title: 'Expertises',
      name: 'expertises',
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
