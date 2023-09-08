export default {
  title: 'Generic Section Fields',
  name: 'genericSectionFields',
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
      type: 'bodyPortableText',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Text',
      name: 'text',
      type: 'string',
    },
    {
      title: 'Reversed',
      name: 'reversed',
      type: 'boolean',
      initialValue: false,
    },
    {
      title: 'Mobile Reversed',
      name: 'mobileReversed',
      type: 'boolean',
      initialValue: false,
    },
    {
      title: 'Desktop Image',
      name: 'desktopImage',
      type: 'customImage',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Mobile Image',
      name: 'mobileImage',
      type: 'customImage',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Button',
      name: 'button',
      type: 'button',
    },
  ],
  preview: {
    select: {
      title: 'heading',
      media: 'mobileImage',
    },
    prepare({title = 'No title', media}) {
      return {
        title,
        media,
      }
    },
  },
}
