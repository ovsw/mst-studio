import { FaColumns } from 'react-icons/fa'

export default {
  title: 'Text w/ Side Image',
  name: 'imgTextColumns',
  type: 'object',
  icon: FaColumns,
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'title'
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true
      },
      validation: Rule => Rule.required().error('missing image')
    },
    {
      name: 'alt',
      title: 'ALT (Image Alternative Text)',
      type: 'string',
      validation: Rule => Rule.required().error('missing ALT text for image')
    },
    {
      name: 'text',
      title: 'Text',
      type: 'simpleBlockTextColumn',
      validation: Rule => Rule.required().error('missing content')
    }
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image'
    },
    prepare ({ title, media }) {
      return {
        title: `[Img w/ text]${title.substring(0, 40)}`,
        media: media
      }
    }
  }
}
