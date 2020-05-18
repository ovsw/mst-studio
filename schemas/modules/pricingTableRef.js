import React from 'react'
import Emoji from 'a11y-react-emoji'
const Icon = () => <Emoji style={{ fontSize: '2rem' }} symbol='💵' />

export default {
  title: 'Pricing Table',
  name: 'pricingTableRef',
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
      name: 'pricingTable',
      title: 'Pricing Table',
      description: 'Select one of the Pricing Tables to display.',
      type: 'reference',
      to: [{ type: 'pricingTable' }]
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
