
import React from 'react'
import Emoji from 'a11y-react-emoji'
const Icon = () => <Emoji style={{ fontSize: '2rem' }} symbol='💬' />

export default {
  name: 'testimonials',
  title: 'Testimonials',
  type: 'object',
  icon: Icon,
  // liveEdit: false,
  // You probably want to uncomment the next line once you've made the pages documents in the Studio. This will remove the pages document type from the create-menus.
  // __experimental_actions: ['update', 'publish', /* 'create', 'delete' */],
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required().error('missing title')
    },
    {
      name: 'testimonials',
      title: 'Selected Testimonials',
      description: 'select which testimonials to display in this block',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            { type: 'testimonial' }
          ]
        }
      ],
      validation: Rule => Rule.required().error('missing section')
    }
  ],
  preview: {
    select: {
      title: 'title',
      media: 'icon'
    }
  }
}
