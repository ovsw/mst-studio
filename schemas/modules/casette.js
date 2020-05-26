import React from 'react'
import Emoji from 'a11y-react-emoji'
const Icon = () => <Emoji style={{ fontSize: '2rem' }} symbol='⬛' />

export default {
  title: 'Casette',
  name: 'casette',
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
      name: 'shortDescription',
      title: 'Short Description',
      type: 'string'
    },
    {
      name: 'buttonText',
      type: 'string'
    },
    {
      name: 'buttonUrl',
      type: 'string'
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'alt',
      title: 'ALT (Image Alternative Text)',
      type: 'string'
    }
  ]
}
