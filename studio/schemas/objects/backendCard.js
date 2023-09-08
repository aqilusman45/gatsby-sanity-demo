export default {
  title: 'Backend Card',
  name: 'backendCard',
  type: 'object',
  fields: [
    {
      title: 'Heading',
      name: 'heading',
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
      title: 'About',
      name: 'About',
      type: 'bodyPortableText',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Text',
      name: 'Text',
      type: 'bodyPortableText',
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
