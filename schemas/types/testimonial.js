
import React from 'react'
import Emoji from 'a11y-react-emoji'
const Icon = () => <Emoji style={{ fontSize: '2rem' }} symbol='💬' />

export default {
  name: 'testimonial',
  title: 'Testimonial',
  icon: Icon,
  type: 'document',
  // liveEdit: false,
  // You probably want to uncomment the next line once you've made the pages documents in the Studio. This will remove the pages document type from the create-menus.
  // __experimental_actions: ['update', 'publish', /* 'create', 'delete' */],
  fields: [
    {
      name: 'section',
      title: 'Section',
      description: 'what section of the business does this testimonial refer to?',
      type: 'string',
      validation: Rule => Rule.required().error('missing section'),
      options: {
        list: [
          { title: 'Performances', value: 'performances' },
          { title: 'Programming', value: 'programming' },
          { title: 'Families', value: 'families' },
          { title: 'Virtual', value: 'virtual' }
        ]
      }
    },
    {
      name: 'priority',
      title: 'Priority',
      description: '(number, optional) if you give an item a proproty they will be placed ahead of items without a priority in front-end listings. A lower number means a higher priority (1, 3, 4, 5, 7, 23, etc). Priorities don\'t need to be consecutive and are on a per-section basis.',
      type: 'number',
      hidden: true,
      validation: (Rule) => Rule.min(0).integer().positive()
    },
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: Rule => Rule.required().error('missing name')
    },
    {
      name: 'role',
      title: 'Role',
      type: 'string',
      validation: Rule => Rule.required().error('missing role')
    },
    {
      name: 'content',
      title: 'Content',
      type: 'simpleBlockText',
      validation: Rule => Rule.required().error('missing role')
    }
  ],
  preview: {
    select: {
      name: 'name',
      section: 'section',
      icon: 'icon',
      priority: 'priority',
      blocks: 'content',
      role: 'role'
    },
    prepare ({ name, section, icon, priority = '', blocks, role }) {
      const block = (blocks || []).find(block => block._type === 'block')
      const exceprt =
      block
        ? block.children.filter(child => child._type === 'span')
          .map(span => span.text)
          .join('')
        : 'No title'
      return {
        title: `[${section}] ${name}`,
        media: icon,
        description: role,
        subtitle: exceprt
      }
    }
  }
}
