import React from 'react'
import Emoji from 'a11y-react-emoji'

const Icon = () => (<Emoji style={{ fontSize: '2rem' }} symbol='📂' />)

export default {
  title: 'Internal Link w/ Children',
  name: 'internalLinkWChildren',
  type: 'object',
  icon: Icon,
  // hidden: true,
  fields: [
    {
      name: 'title',
      title: 'Menu Item Title',
      type: 'string',
      validation: Rule =>
        Rule.required().error('missing title')
    },
    {
      name: 'link',
      title: 'Link',
      type: 'reference',
      to: [
        { type: 'page' }
      ],
      validation: Rule =>
        Rule.required().error('missing referece to internal page')
    },
    {
      name: 'subItems',
      title: 'Sub-items',
      type: 'array',
      of: [
        { type: 'internalLink' }
      ],
      validation: Rule =>
        Rule.required().error('must have at least one child')
    }
  ],
  preview: {
    select: {
      title: 'title',
      media: 'icon'
    },
    prepare ({ title, media }) {
      return {
        title: `${title} [+] `,
        media
      }
    }
  }
}
