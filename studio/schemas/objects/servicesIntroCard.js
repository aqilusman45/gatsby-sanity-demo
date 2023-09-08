export default {
    title: 'Services Intro Card',
    name: 'servicesIntroCard',
    type: 'object',
    fields: [
      {
        title: 'tabName',
        name: 'tabName',
        type: 'reference',
        to:[
            {
                type:'servicesIntroCategories'
            }
        ],
        validation: (Rule) => Rule.required(),
      },
      {
        title: 'Logo',
        name: 'logo',
        type: 'customImage',
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
        type: 'bodyPortableText',
        validation: (Rule) => Rule.required(),
      },
      {
        title: 'Text',
        name: 'text',
        type: 'bodyPortableText',
        validation: (Rule) => Rule.required(),
      },
      {
        title: 'Checklist',
        name: 'checklist',
        type: 'checklistObject',
        validation: (Rule) => Rule.required(),
      },
      {
        title: 'Images Cards',
        name: 'imagesCards',
        type: 'array',
        of:[
            {
                type:'imageCard'
            }
        ]
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
  