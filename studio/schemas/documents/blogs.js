export default {
  title: 'Blog Posts',
  name: 'blogs',
  type: 'document',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Slug',
      description: 'Exclude leading and trailing backslashes',
      name: 'slug',
      type: 'slug',
      validation: (Rule) => Rule.required(),
      options: {
        source: 'title',
        maxLength: 200,
        slugify: (input) => input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
      },
    },
    {
      title: 'Published at',
      name: 'publishedAt',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Make this post featured',
      name: 'featured',
      type: 'boolean',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'SEO Title',
      name: 'seoTitle',
      type: 'string',
    },
    {
      title: 'Meta Description',
      name: 'metaDescription',
      type: 'text',
    },
    {
      title: 'Desktop Image',
      name: 'desktopImage',
      type: 'customImage',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Author',
      name: 'authors',
      type: 'reference',
      validation: (Rule) => Rule.required(),
      options: {
        disableNew: true,
      },
      to: [{type: 'authors'}],
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
      title: 'Body',
      name: 'body',
      type: 'bodyPortableText',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Description',
      name: 'description',
      type: 'string',
      validation: Rule => Rule.required().max(130).error(`A title shouldn't be more than 120 characters.`)
    },
  ],
  orderings: [
    {
      title: 'Publishing date new–>old',
      name: 'publishingDateDesc',
      by: [
        {
          field: 'publishedAt',
          direction: 'desc',
        },
        {
          field: 'title',
          direction: 'desc',
        },
      ],
    },
    {
      title: 'Publishing date old->new',
      name: 'publishingDateAsc',
      by: [
        {
          field: 'publishedAt',
          direction: 'asc',
        },
        {
          field: 'title',
          direction: 'asc',
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'title',
      publishedAt: 'publishedAt',
      slug: 'slug',
      media: 'desktopImage',
    },
    prepare({title = 'No title', slug = {}, media}) {
      return {
        title,
        subtitle: `/${slug.current}/`,
        media,
      }
    },
  },
}
