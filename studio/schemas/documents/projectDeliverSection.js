export default {
    title: 'Project Deliver Section',
    name: 'projectDeliverSection',
    type: 'document',
    fields: [
      {
        title: 'Identifier',
        name: 'identifier',
        type: 'string',
        validation: (Rule) => Rule.required(),
      },
      {
        title: 'Dark Theme',
        name: 'isdarkTheme',
        type: 'boolean',
        initialValue: true,
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
      }
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
  