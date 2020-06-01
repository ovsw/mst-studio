import React from 'react'
import S from '@sanity/desk-tool/structure-builder'
import Emoji from 'a11y-react-emoji'

const Icon = () => <Emoji style={{ fontSize: '2rem' }} symbol='✍' />

export const AuthorsMenuItem = S.listItem()
  .title('Authors')
  .icon(Icon)
  .child(
    S.documentTypeList('author')
      .title('Authors')
      .menuItems(S.documentTypeList('author').getMenuItems())
      .filter('_type == $type')
      .params({ type: 'author' })
  )
