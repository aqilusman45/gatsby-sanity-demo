export default {
  title: 'Blogs Hero Section',
  name: 'blogsHeroSection',
  type: 'document',
  fields: [
    {
      title: 'Identifier',
      name: 'identifier',
      type: 'string',
    },
    {
      title: 'Blog Category',
      name: 'blogCategory',
      type: 'reference',
      validation: (Rule) => Rule.required(),
      options: {
        disableNew: true,
      },
      to: [{type: 'blogCategory'}],
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
