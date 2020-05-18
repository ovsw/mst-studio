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
      description: 'this is the title of the table as it will be seen by the websites\'visitors on the front-end',
      validation: Rule => Rule.required()
    },
    {
      name: 'pricingTable',
      title: 'Pricing Table',
      description: 'Select one of the Pricing Tables to display. Name of the tables below are internal-use only, the title above will be used on the front-end instead.',
      type: 'reference',
      to: [{ type: 'pricingTable' }],
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
        title: `[Pricing Table] ${title}`,
        media: icon
      }
    }
  }
}
