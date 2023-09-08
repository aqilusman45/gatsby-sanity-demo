export default {
  title: 'Why Us Card',
  name: 'whyUsCard',
  type: 'object',
  fields: [
    {
      title: 'Heading',
      name: 'heading',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Sub Text',
      name: 'subText',
      type: 'string',
      validation: Rule => Rule.required().max(200).error(`A title shouldn't be more than 120 characters.`)
    },
    {
      title: 'Image',
      name: 'image',
      type: 'customImage',
    },
  ],
  preview: {
    select: {
      heading: 'heading',
    },
    prepare({heading = 'No title'}) {
      return {
        title: heading,
      }
    },
  },
}
