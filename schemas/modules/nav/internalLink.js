import React from 'react'
import Emoji from 'a11y-react-emoji'

const Icon = () => (<Emoji style={{ fontSize: '2rem' }} symbol='🔗' />)

export default {
  title: 'Internal Link',
  name: 'internalLink',
  type: 'object',
  icon: Icon,
  // hidden: true,
  fields: [
    {
      name: 'title',
      title: 'Menu item title',
      type: 'string',
      validation: Rule =>
        Rule.required().error('missing title')
    },
    {
      name: 'link',
      title: 'Link',
      type: 'reference',
      to: [
        { type: 'page' },
        { type: 'pageWizard' }

        // { type: 'product' }
      ],
      validation: Rule =>
        Rule.required().error('missing referece to internal page')
    }
  ],
  preview: {
    select: {
      title: 'title',
      media: 'icon'
    },
    prepare ({ title, media }) {
      return {
        title: `${title}`,
        media
      }
    }
  }
}
