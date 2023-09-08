export default {
  title: 'Button',
  name: 'button',
  type: 'object',
  fields: [
    {
      title: 'Label',
      name: 'label',
      type: 'string',
      // validation: (Rule) =>
      //   Rule.custom((label) => (label === undefined ? 'This field must not be empty.' : true)),
    },
    {
      title: 'External Link',
      name: 'externalLink',
      type: 'boolean',
    },
    {
      title: 'Variant',
      name: 'variant',
      type: 'string',
      // validation: (Rule) =>
      //   Rule.custom((variant) => (variant === undefined ? 'This field must not be empty.' : true)),
      options: {
        list: [
          {title: 'Primary', value: 'primary'},
          {title: 'Secondary', value: 'secondary'},
          {title: 'Tertiary', value: 'tertiary'},
          {title: 'Text Link', value: 'textLink'},
        ],
      },
    },
    {
      title: 'Action',
      name: 'action',
      type: 'string',
      // validation: (Rule) =>
      //   Rule.custom((variant) => (variant === undefined ? 'This field must not be empty.' : true)),
      options: {
        list: ['link', 'form'],
      },
    },
    {
      title: 'Link',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 200,
        isUnique: () => true,
        slugify: (input) => input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
      },
      // validation: (Rule) =>
      //   Rule.custom((slug, {parent}) => {
      //     if (!slug && parent.action === 'link') {
      //       return 'slug is required'
      //     }
      //     return true
      //   }),
      // validation: (Rule) => Rule.required().custom((_, { parent }) => parent.action === "link" && false),
      hidden: ({parent}) => !parent?.action || parent?.action === 'form',
    },
    {
      title: 'Form',
      name: 'form',
      type: 'string',
      options: {
        list: [{title: 'Contact Us', value: 'contact-us'}],
      },
      // validation: (Rule) =>
      //   Rule.custom((form, {parent}) => {
      //     if (!form && parent.action === 'form') {
      //       return 'Form is required'
      //     }
      //     return true
      //   }),
      hidden: ({parent}) => !parent?.action || parent?.action === 'link',
    },
  ],
  preview: {
    select: {
      label: 'label',
      slug: 'slug',
    },
    prepare({label = 'No Label', slug = {}}) {
      return {
        title: label,
        slug: `/${slug.current}/`,
      }
    },
  },
}
