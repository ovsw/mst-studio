import React from 'react'
import Emoji from 'a11y-react-emoji'
const Icon = () => <Emoji style={{ fontSize: '2rem' }} symbol='➡' />

export default {
  title: 'Redirect',
  name: 'redirect',
  type: 'object',
  icon: Icon,
  hidden: true,
  fields: [
    {
      name: 'fromPath',
      title: 'From Path',
      description: 'eg: /old-url/, /old-url/sub-page/',
      type: 'string'
    },
    {
      name: 'toPath',
      title: 'To Path',
      description: 'eg: /new-url/, /new-url/sub-page/',
      type: 'string'
    },
    {
      name: 'isPermanent',
      title: 'Is permanent? (301) - REQUIRED to be set (off or on)',
      description: 'by default all redirects are temporary (302). If you want to create a permanent redirect (301) then turn this on, otherwise turn it off.',
      type: 'boolean',
      validation: Rule => Rule.required().error('"is permanent?" switch not set (on or off)')
    }
  ],
  preview: {
    select: {
      from: 'fromPath',
      to: 'toPath',
      permanent: 'isPermanent'
    },
    prepare ({ from, to }) {
      return {
        title: `${from}`,
        subtitle: `${to}`
      }
    }
  }
}
