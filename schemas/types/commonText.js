import React from 'react'
import Emoji from 'a11y-react-emoji'
const Icon = () => <Emoji style={{ fontSize: '2rem' }} symbol='📝' />

export default {
  title: 'Common Text',
  name: 'commonText',
  type: 'document',
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
      name: 'content',
      title: 'Content',
      type: 'simpleBlockTextEnhanced',
      validation: Rule => Rule.required()
    }
  ],
  preview: {
    select: {
      title: 'title',
      icon: 'icon'
    },
    prepare ({ title, icon }) {
      return {
        title: `${title}`,
        media: icon
      }
    }
  }
}
