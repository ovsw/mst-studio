import { BsFillAspectRatioFill } from 'react-icons/bs'

export default {
  title: 'Button',
  name: 'button',
  type: 'object',
  icon: BsFillAspectRatioFill,
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
      text: 'text'
    },
    prepare (selection) {
      const { icon, text } = selection
      const title = `[CTA Block] ${text}`
      return {
        title: title,
        media: icon
      }
    }

  }
}
