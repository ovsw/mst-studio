import React from 'react'
import S from '@sanity/desk-tool/structure-builder'

import {
  ConfigMenu,
  PageMenuItem,
  PageMenuItemPerformances,
  PageMenuItemProgramming,
  PageMenuItemHidden,
  PageMenuItemVirtual,
  BlogMenuItem,
  TestimonialsMenuItem,
  PricingTablesMenuItem,
  CommonTextsMenuItem
} from './structure/index'

//
// === Structure ===
//

export default () =>
  S.list()
    .title('Content')
    .items([
      ConfigMenu,
      S.divider(),
      PageMenuItem,
      PageMenuItemPerformances,
      PageMenuItemProgramming,
      PageMenuItemVirtual,
      PageMenuItemHidden,
      BlogMenuItem,
      S.divider(),
      TestimonialsMenuItem,
      PricingTablesMenuItem,
      CommonTextsMenuItem
      // CollectionMenuItem,
      // ProductMenuItem,
      // ProductVariantParent,
      // ...S.documentTypeListItems()
    ])
