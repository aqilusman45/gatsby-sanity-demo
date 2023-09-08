export default {
  title: 'Saas Tools Sections',
  name: 'saasToolsSections',
  type: 'document',
  fields: [
    {
      title: 'Action',
      name: 'action',
      type: 'string',
      validation: (Rule) =>
        Rule.custom((variant) => (variant === undefined ? 'This field must not be empty.' : true)),
      options: {
        list: ['normal', 'tabs'],
      },
    },
    {
      title: 'Identifier',
      name: 'identifier',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Main Heading',
      name: 'mainHeading',
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
      title: 'Cards',
      name: 'cards',
      type: 'array',
      of: [
        {
          type: 'imageCard',
        }
      ],
      hidden: ({parent}) => !parent?.action || parent?.action === 'tabs',
    },
    {
      title: 'Tab Cards',
      name: 'tabCards',
      type: 'array',
      of: [
        {
          type: 'sassToolsCard',
        }
      ],
      hidden: ({parent}) => !parent?.action || parent?.action === 'normal',
    },
  ],
  preview: {
    select: {
      title: 'identifier',
    },
    prepare({title = 'No title'}) {
      return {
        title,
      }
    },
  },
}
