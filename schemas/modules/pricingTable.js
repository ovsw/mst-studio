import React from 'react'
import Emoji from 'a11y-react-emoji'
const Icon = () => <Emoji style={{ fontSize: '2rem' }} symbol='💵' />

export default {
  title: 'Pricing Table',
  name: 'pricingTable',
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
      name: 'col0',
      title: 'Features Column Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'col1',
      title: 'Package 1 Name',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'col2',
      title: 'Package 2 Name',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'col3',
      title: 'Package 3 Name',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'items',
      title: 'Features',
      type: 'array',
      of: [{ type: 'pricingTableRow' }],
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
        title: `[Pricing Table] ${title}`,
        media: icon
      }
    }
  }
}
