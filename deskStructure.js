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
  CommonTextsMenuItem,
  AuthorsMenuItem
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
      CommonTextsMenuItem,
      AuthorsMenuItem
      // CollectionMenuItem,
      // ProductMenuItem,
      // ProductVariantParent,
      // ...S.documentTypeListItems()
    ])
