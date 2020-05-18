import React from 'react'
import Emoji from 'a11y-react-emoji'
const Icon = () => <Emoji style={{ fontSize: '2rem' }} symbol='3️⃣' />

export default {
  title: 'Section w/ 3 Items',
  name: 'sectionWithItems',
  type: 'object',
  icon: Icon,
  hidden: true,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'shortDescription',
      title: 'Short Description (Optional)',
      type: 'string'
    },
    {
      name: 'items',
      title: 'Items',
      type: 'array',
      of: [{ type: 'sectionItem' }],
      validation: Rule => Rule.min(3).max(3)
    }
  ],
  preview: {
    select: {
      title: 'title',
      icon: 'icon'
    },
    prepare ({ title, icon }) {
      return {
        title: `[3 Items] ${title}`,
        media: icon
      }
    }
  }
}
