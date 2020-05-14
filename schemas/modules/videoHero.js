import React from 'react'
import Emoji from 'a11y-react-emoji'
const Icon = () => <Emoji style={{ fontSize: '2rem' }} symbol='📺' />

export default {
  title: 'Video Hero Module',
  name: 'videoHero',
  type: 'object',
  icon: Icon,
  hidden: true,
  fields: [
    {
      name: 'title',
      title: 'Title Heading',
      type: 'string',
      validation: Rule => Rule.required('missing heading')
    },
    {
      name: 'text',
      title: 'Paragraph text',
      type: 'simpleBlockTextEnhanced',
      validation: Rule => Rule.required('missing text')
    },
    {
      name: 'video',
      title: 'Video Background',
      type: 'string',
      validation: Rule => Rule.required('missing video'),
      options: {
        list: [
          {
            title: 'Performances Video',
            value: 'performances1'
          },
          {
            title: 'MST Live Video',
            value: 'live1'
          }
        ]
      }
    },
    {
      name: 'image',
      title: 'Video Image',
      description: 'This is used on smartphones instead of the video.',
      type: 'image',
      options: {
        hotspot: true
      },
      validation: Rule => Rule.required().error('missing image')
    },
    {
      name: 'buttonText',
      title: 'Button Text',
      type: 'string'
    },
    {
      name: 'url',
      title: 'Button Link',
      type: 'string'
    }
  ],
  preview: {
    select: {
      title: 'title',
      image: 'icon'
    },
    prepare ({ title, image }) {
      return {
        title: `[Video Hero] ${title}`,
        media: image
      }
    }
  }
}
