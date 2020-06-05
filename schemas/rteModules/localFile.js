import { FaFileAlt } from 'react-icons/fa'

export default {
  name: 'localFile',
  type: 'object',
  title: 'File',
  icon: FaFileAlt,

  fields: [
    {
      name: 'file',
      type: 'file',
      title: 'File',
      validation: Rule => Rule.required()
      // options: {
      //   accept: '.pdf,.docx,.doc,.xls,.xlsx'
      // },
    },
    {
      name: 'description',
      type: 'string',
      title: 'Button Text',
      description: 'this text will appear on the button that downloads the file when clicked',
      options: {
        isHighlighted: true
      },
      validation: Rule => Rule.error('You have to fill out the description of the file.').required()
    }
  ],
  preview: {
    select: {
      title: 'description'
    },
    prepare ({ title }) {
      return {
        title: `[File Button] ${title.substring(0, 30)}`
      }
    }
  }
}
