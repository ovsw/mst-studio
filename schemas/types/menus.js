import React from 'react'
import Emoji from 'a11y-react-emoji'

const Icon = () => (<Emoji style={{ fontSize: '2rem' }} symbol='🚦' />)

export default {
  name: 'menus',
  _id: 'menus',
  title: 'Menus',
  type: 'document',
  // description: 'This handles all the global settings throughout the site, promo bars, phone numbers etc, ',
  icon: Icon,
  fields: [

    {
      name: 'title',
      title: 'Title',
      type: 'string'
      // hidden: true
    },
    // {
    //   name: 'slug',
    //   title: 'Slug',
    //   type: 'slug',
    //   options: {
    //     source: 'title',
    //     maxLength: 96
    //   },
    //   validation: Rule => Rule.required()
    // },

    {
      name: 'items',
      title: 'Navigation Items',
      type: 'array',
      of: [
        { type: 'internalLink' },
        { type: 'internalLinkWChildren' },
        { type: 'internalLinkWSlug' }
        // { type: 'externalLink' },
        // { type: 'externalLinkWChildren' }
      ]
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
