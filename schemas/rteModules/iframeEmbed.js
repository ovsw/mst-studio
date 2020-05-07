import { FaCode } from 'react-icons/fa'

export default {
  name: 'iframeEmbed',
  type: 'object',
  title: 'Iframe Embed (forms, etc)',
  icon: FaCode,
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: 'Embed Code',
      name: 'code',
      type: 'text',
      validation: Rule => Rule.required()
    },
    {
      title: 'Embed Type',
      name: 'embedType',
      type: 'string',
      options: {
        list: [
          { title: 'Simple Iframe', value: 'iframe' },
          { title: 'JotForm', value: 'jotForm' },
          { title: 'Calendly Widget', value: 'calendly' }
        ]
      }
    }
  ],
  preview: {
    select: {
      title: 'title'
    }
  }
}
