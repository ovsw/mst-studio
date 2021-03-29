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
  AuthorsMenuItem,
  RedirectsMenuItem
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
      S.divider(),
      BlogMenuItem,
      AuthorsMenuItem,
      S.divider(),
      TestimonialsMenuItem,
      PricingTablesMenuItem,
      CommonTextsMenuItem,
      RedirectsMenuItem
      // CollectionMenuItem,
      // ProductMenuItem,
      // ProductVariantParent,
      // ...S.documentTypeListItems()
    ])
