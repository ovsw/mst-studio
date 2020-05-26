import { FaEllipsisH } from 'react-icons/fa'

export default {
  title: 'Common Text',
  name: 'commonTextRef',
  type: 'object',
  icon: FaEllipsisH,
  hidden: true,
  fields: [
    {
      name: 'commonText',
      title: 'Common Text',
      description: 'Select one of the Common Texts to display.',
      type: 'reference',
      to: [{ type: 'commonText' }],
      validation: Rule => Rule.required()
    }
  ],
  preview: {
    select: {
      icon: 'icon',
      referenceTitle: 'commonText.title'
    },
    prepare ({ icon, referenceTitle }) {
      return {
        title: `[Common Text] ${referenceTitle.substring(0, 40) || ''}`,
        media: icon
      }
    }
  }
}
