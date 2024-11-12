import React from 'react'
import S from '@sanity/desk-tool/structure-builder'
import Emoji from 'a11y-react-emoji'

const HiddenIcon = () => <Emoji style={{ fontSize: '2rem' }} symbol='🥷' />

export const PageMenuItemHidden = S.listItem()
  .title('Hidden pages')
  .icon(HiddenIcon)
  .child(
    S.documentTypeList('pageHidden')
      .title('Hidden Pages')
      .menuItems(S.documentTypeList('pageHidden').getMenuItems())
      .filter('_type == $type')
      .params({ type: 'pageHidden' })
  )
