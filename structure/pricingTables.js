import React from 'react'
import S from '@sanity/desk-tool/structure-builder'
import Emoji from 'a11y-react-emoji'

const TestimonialIcon = () => <Emoji style={{ fontSize: '2rem' }} symbol='💵' />

export const PricingTablesMenuItem = S.listItem()
  .title('Pricing Tables')
  .icon(TestimonialIcon)
  .child(
    S.documentTypeList('pricingTable')
      .title('Pricing Tables')
      .menuItems(S.documentTypeList('pricingTable').getMenuItems())
      .filter('_type == $type')
      .params({ type: 'pricingTable' })
  )
