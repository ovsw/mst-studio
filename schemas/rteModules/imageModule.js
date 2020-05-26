import { IoIosImage } from 'react-icons/io'

export default {
  title: 'Image Module',
  name: 'imageModule',
  type: 'object',
  icon: IoIosImage,
  hidden: true,
  fields: [
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
      name: 'caption',
      title: 'Image Caption',
      type: 'string'
    },
    {
      name: 'layout',
      title: 'Layout',
      type: 'string',
      options: {
        list: [
          { title: 'Full Width', value: 'full' },
          { title: 'Medium', value: 'medium' },
          { title: 'Float Left', value: 'left' },
          { title: 'Float Right', value: 'right' }
        ],
        layout: 'dropdown'
      }
    }
  ],
  preview: {
    select: {
      media: 'image',
      caption: 'caption',
      alt: 'alt',
      layout: 'layout'
    },
    prepare (selection) {
      const { media, caption, alt, layout } = selection
      const titleText = caption || alt
      const title = `[${layout}] ${titleText.substring(0, 40)}`
      return {
        title: title,
        media: media
      }
    }

  }
}
