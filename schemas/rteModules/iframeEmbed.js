import { FaCode } from 'react-icons/fa'

export default {
  name: 'iframeEmbed',
  type: 'object',
  title: 'Iframe Embed (forms, maps etc)',
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
      description: 'For JotForm forms, just paste in the link to the form, eg: https://www.jotform.com/201425300118034 do NOT paste the embed code!',
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
    },
    prepare ({ title }) {
      return {
        title: title.substring(0, 40)
      }
    }
  }
}
