import React from 'react'
import S from '@sanity/desk-tool/structure-builder'
import Emoji from 'a11y-react-emoji'

const CommonTextIcon = () => <Emoji style={{ fontSize: '2rem' }} symbol='📝' />

export const CommonTextsMenuItem = S.listItem()
  .title('Common Texts')
  .icon(CommonTextIcon)
  .child(
    S.documentTypeList('commonText')
      .title('CommonTexts')
      .menuItems(S.documentTypeList('commonText').getMenuItems())
      .filter('_type == $type')
      .params({ type: 'commonText' })
  )
