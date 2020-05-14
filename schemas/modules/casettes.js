import React from 'react'
import Emoji from 'a11y-react-emoji'
const Icon = () => <Emoji style={{ fontSize: '2rem' }} symbol='⬛' />

export default {
  title: 'Casettes',
  name: 'casettes',
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
      title: 'Casettes',
      type: 'array',
      of: [{ type: 'casette' }],
      validation: Rule => Rule.min(1).max(40)
    }
  ],
  preview: {
    select: {
      title: 'title',
      icon: 'icon'
    },
    prepare ({ title, icon }) {
      return {
        title: `[Casettes] ${title}`,
        media: icon
      }
    }
  }
}
