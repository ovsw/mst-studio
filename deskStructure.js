import React from 'react'
import S from '@sanity/desk-tool/structure-builder'

import {
  ConfigMenu,
  // ProductMenuItem,
  // ProductVariantParent,
  // CollectionMenuItem,
  PageMenuItem,
  PageMenuItemPerformances,
  PageMenuItemVirtual
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
      PageMenuItemVirtual,
      // CollectionMenuItem,
      // ProductMenuItem,
      // ProductVariantParent,
      ...S.documentTypeListItems()
    ])
