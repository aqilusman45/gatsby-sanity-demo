 import IframePreview from '../components/IframePreview'
 
export default {
  name: "iframe",
  type: "object",
  title: "Iframe",
  fields: [
    {
      name: "url",
      type: "url",
      title: "Source URL",
      validation: (Rule) =>
        Rule.uri({
          scheme: ["http", "https"],
          allowRelative: true,
        }).required(),
    },
    {
      name: "height",
      description: "px will be appended",
      type: "number",
      title: "Height",
      validation: (Rule) => Rule.required(),
    },
  ],
  components:{
    preview:IframePreview,
  },
  preview: {
    select: {
      url: "url",
      height: "height",
    },
  },
};
