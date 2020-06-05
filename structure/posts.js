import React from 'react'
import S from '@sanity/desk-tool/structure-builder'
import Emoji from 'a11y-react-emoji'

const BlogIcon = () => <Emoji style={{ fontSize: '2rem' }} symbol='📰' />

export const BlogMenuItem = S.listItem()
  .title('Blog Posts')
  .icon(BlogIcon)
  .child(
    S.documentTypeList('post')
      .title('Blog Pages List')
      .menuItems(S.documentTypeList('post').getMenuItems())
      .filter('_type == $type')
      .params({ type: 'post' })
  )
