import React from 'react'
import Emoji from 'a11y-react-emoji'
const Icon = () => <Emoji style={{ fontSize: '2rem' }} symbol='⬛' />

export default {
  title: 'Item',
  name: 'sectionItem',
  type: 'object',
  icon: Icon,
  hidden: true,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'content',
      title: 'Short Description',
      type: 'simpleBlockTextEnhanced'
    }
  ]
}
