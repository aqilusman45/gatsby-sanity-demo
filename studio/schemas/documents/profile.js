export default {
  title: 'Profile',
  name: 'profile',
  type: 'document',
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
      validation: (Rule) => Rule.required(),
      options: {
        source: 'seoTitle',
        maxLength: 200,
        slugify: (input) => {
          return input.toLowerCase().replace(/\s+/g, '-').slice(0, 200)
        },
      },
    },
    {
      title: 'Identifier',
      name: 'identifier',
      type: 'string',
    },
    {
      title: 'Image',
      name: 'image',
      type: 'customImage',
    },
    {
      title: 'Tab',
      name: 'tab',
      type: 'reference',
      validation: (Rule) => Rule.required(),
      options: {
        disableNew: true,
      },
      to: [{type: 'servicesCategory'}],
    },
    {
      title: 'Name',
      name: 'name',
      type: 'string',
    },
    {
      title: 'Position',
      name: 'position',
      type: 'reference',
      validation: (Rule) => Rule.required(),
      options: {
        disableNew: true,
      },
      to: [{type: 'positions'}],
    },
    {
      title: 'Description',
      name: 'description',
      type: 'string',
      validation: Rule => Rule.required().max(200).error(`A title shouldn't be more than 120 characters.`)
    },
    {
      title: 'About',
      name: 'about',
      type: 'bodyPortableText',
    },
    {
      title: 'Location',
      name: 'location',
      type: 'string',
    },  {
      title: 'LinkedIn Url',
      name: 'linkedinUrl',
      type: 'string',
      // validation: (Rule) =>
      //   Rule.regex(/http(s)?:\/\/([\w]+\.)?linkedin\.com\/in\/[A-z0-9_-]+\/?/, {
      //     name: 'linkedinUrl',
      //     invert: false,
      //   }),
    },
    
    {
      title: 'Github Url',
      name: 'githubUrl',
      type: 'string',
      // validation: (Rule) =>
      //   Rule.regex(/http(s)?:\/\/([\w]+\.)?linkedin\.com\/in\/[A-z0-9_-]+\/?/, {
      //     name: 'linkedinUrl',
      //     invert: false,
      //   }),
    },
    {
      title: 'Twitter Url',
      name: 'twitterUrl',
      type: 'string',
      // validation: (Rule) =>
      //   Rule.regex(/http(s)?:\/\/([\w]+\.)?linkedin\.com\/in\/[A-z0-9_-]+\/?/, {
      //     name: 'linkedinUrl',
      //     invert: false,
      //   }),
    },
    {
      name: 'skills',
      title: 'Skills',
      type: 'array',
      of: [ {
        type: 'reference',
        to: [{type: 'skills'}],
      },],
    },
    {
      name: 'industries',
      title: 'Industries',
      type: 'array',
      of: [{type: 'imageCard'}],
    },
    {
      name: 'technologies',
      title: 'Technologies',
      type: 'array',
      of: [{type: 'imageCard'}],
    },
  ],
  preview: {
    select: {
      title: 'name',
    },
  },
}
