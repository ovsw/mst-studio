import { FaLink } from 'react-icons/fa'

export default {
  title: 'Button',
  name: 'button',
  type: 'object',
  icon: FaLink,
  fields: [
    {
      name: 'buttonText',
      title: 'Button Text',
      type: 'string',
      validation: Rule => Rule.required().error('missing button text')
    },
    {
      name: 'url',
      title: 'Link',
      type: 'string',
      validation: Rule => Rule.required().error('missing button link')
    }
    // {
    //   name: 'layout',
    //   title: 'Layout',
    //   type: 'string',
    //   options: {
    //     list: [
    //       { title: 'Full Width', value: 'full' },
    //       { title: 'Medium', value: 'medium' },
    //       { title: 'Float Left', value: 'left' },
    //       { title: 'Float Right', value: 'right' }
    //     ],
    //     layout: 'dropdown'
    //   }
    // }
  ],
  preview: {
    select: {
      media: 'icon',
      text: 'buttonText',
      url: 'url'
    },
    prepare (selection) {
      const { media, text, url } = selection
      const title = `[Button] ${text} ${url}`
      return {
        title: title.substring(0, 40),
        media: media
      }
    }

  }
}
