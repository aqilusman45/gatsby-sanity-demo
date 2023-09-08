export default {
  title: 'Mini Hero Sections',
  name: 'miniHeroSections',
  type: 'document',
  fields: [
    {
      title: 'Identifier',
      name: 'identifier',
      type: 'string',
    },
    {
      title: 'Dark Theme',
      name: 'isdarkTheme',
      type: 'boolean',
      initialValue: true,
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Sub Text',
      name: 'subText',
      type: 'bodyPortableText',
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'identifier',
      media: 'desktopImage',
    },
    prepare({title = 'No title'}) {
      return {
        title,
      }
    },
  },
}
