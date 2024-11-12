export default {
  title: 'Inner Hero Module',
  name: 'heroInnerModule',
  type: 'object',
  // hidden: true,
  fields: [
    {
      name: 'title',
      title: 'Heading Text',
      type: 'string',
      validation: Rule => Rule.required('missing hero module title')
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true
      },
      validation: Rule => Rule.required().error('missing Hero module image.')
    },
    {
      name: 'caption',
      title: 'ALT Text',
      description: 'For SEO and screen-readers.',
      type: 'string',
      validation: Rule => Rule.required('missing hero module image ALT text')
    }
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image'
    },
    prepare ({ title, media }) {
      return {
        title: `[hero] ${title}`,
        media
      }
    }
  }
}
