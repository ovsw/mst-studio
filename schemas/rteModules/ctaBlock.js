import { IoIosArrowDropright } from 'react-icons/io'

export default {
  title: 'CTA Block',
  name: 'ctaBlock',
  type: 'object',
  icon: IoIosArrowDropright,
  hidden: true,
  fields: [
    // {
    //   name: 'image',
    //   title: 'Image',
    //   type: 'imageModule',
    //   validation: Rule => Rule.required().error('missing image')
    // },
    {
      name: 'text',
      title: 'Text',
      type: 'string',
      validation: Rule => Rule.required().error('missing call to action text')
    },
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
      const title = `[CTA Block] ${text.substring(0, 40)}`
      return {
        title: title,
        media: icon
      }
    }

  }
}
