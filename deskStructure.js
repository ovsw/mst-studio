import React from 'react'
import S from '@sanity/desk-tool/structure-builder'

import {
  ConfigMenu,
  PageMenuItem,
  PageMenuItemPerformances,
  PageMenuItemProgramming,
  PageMenuItemHidden,
  PageMenuItemVirtual,
  BlogMenuItem
} from './structure/index'

//
// === Structure ===
//

export default () =>
  S.list()
    .title('Content')
    .items([
      ConfigMenu,
      PageMenuItem,
      PageMenuItemPerformances,
      PageMenuItemProgramming,
      PageMenuItemVirtual,
      PageMenuItemHidden,
      BlogMenuItem
      // CollectionMenuItem,
      // ProductMenuItem,
      // ProductVariantParent,
      // ...S.documentTypeListItems()
    ])
