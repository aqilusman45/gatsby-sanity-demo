export default {
    name: 'industriesPages',
    type: 'document',
    title: 'Industries Pages',
    fields: [
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
        title: 'Slug',
        description: 'Exclude leading and trailing backslashes',
        name: 'slug',
        type: 'slug',
        // validation: (Rule) => Rule.required(),
        options: {
          source: 'title',
          maxLength: 200,
          slugify: (input) => input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
        },
      },
      {
        title: 'Indexed',
        name: 'isIndexed',
        type: 'boolean',
        initialValue: true,
        validation: (Rule) => Rule.required(),
      },
      {
        title: 'Title',
        name: 'title',
        type: 'string',
        validation: (Rule) => Rule.required(),
      },
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
        validation: (Rule) => Rule.required(),
      },
      {
        title: 'Button Title',
        name: 'buttonTitle',
        type: 'string',
        validation: (Rule) => Rule.required(),
      },
    ],
    preview: {
      select: {
        title: 'title',
      },
      prepare({title = 'No title'}) {
        return {
          title,
        }
      },
    },
  }
  