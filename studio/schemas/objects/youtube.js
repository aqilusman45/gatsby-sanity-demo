import YoutubePreview from '../components/YoutubePreview'

export default {
  name: 'youtube',
  type: 'object',
  title: 'YouTube',
  fields: [
    {
      name: 'url',
      type: 'url',
      title: 'Video URL',
    },
  ],
  components:{
    preview:YoutubePreview,
  },
  preview: {
    select: {
      url: 'url',
    },
  },
}
