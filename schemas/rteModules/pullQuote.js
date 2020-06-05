import { IoMdQuote } from 'react-icons/io'

export default {
  title: 'PullQuote',
  name: 'pullQuote',
  type: 'object',
  icon: IoMdQuote,
  fields: [
    {
      name: 'text',
      title: 'Quote Text',
      type: 'text',
      validation: Rule => Rule.required().error('missing button text')
    },
    {
      name: 'align',
      title: 'Align',
      type: 'string',
      options: {
        list: [
          {
            title: 'center',
            value: 'center'
          }, {
            title: 'left',
            value: 'left'
          }, {
            title: 'right',
            value: 'right'
          }
        ]
      },
      validation: Rule => Rule.required()
    }
  ],
  preview: {
    select: {
      media: 'icon',
      text: 'text',
      align: 'align'
    },
    prepare (selection) {
      const { icon, text, align } = selection
      const title = `[${align}] ${text}`
      return {
        title: title.substring(0, 40),
        media: icon
      }
    }

  }
}
