import React from 'react'
import Emoji from 'a11y-react-emoji'

const Icon = () => <Emoji style={{ fontSize: '2rem' }} symbol='🎭' />

export default {
  name: 'pagePerformance',
  title: 'Performance',
  type: 'document',
  icon: Icon,
  liveEdit: false,
  // You probably want to uncomment the next line once you've made the pages documents in the Studio. This will remove the pages document type from the create-menus.
  // __experimental_actions: ['update', 'publish', /* 'create', 'delete' */],
  fields: [
    {
      name: 'content',
      type: 'pagePerformanceContent'
    }
  ],
  preview: {
    select: {
      title: 'content.main.title',
      subtitle: 'heroText'
    }
  }
}
