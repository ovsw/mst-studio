import React from 'react'
import S from '@sanity/desk-tool/structure-builder'
import Emoji from 'a11y-react-emoji'

const ConfigIcon = () => <Emoji style={{ fontSize: '2rem' }} symbol='⚙️' />

export const ConfigMenu = S.listItem()
  .title('Configuration')
  .icon(ConfigIcon)
  .child(
    S.list()
      .title('Settings')
      .items([
        // S.listItem()
        //   .title('Menus')
        //   .child(
        //     S.documentTypeList('menus')
        //       .title('Menus')
        //       .filter('_type == $type')
        //       .params({ type: 'menus' })
        //   ),
        S.documentListItem()
          .title('Year-Round Shows')
          .id('menusPerformances')
          .schemaType('menus'),
        S.documentListItem()
          .title('Programming Menu')
          .id('menusProgramming')
          .schemaType('menus'),
        S.documentListItem()
          .title('Summer Camp Shows')
          .id('menusLive')
          .schemaType('menus'),
        S.documentListItem()
          .title('Global')
          .id('siteGlobal')
          .schemaType('siteGlobal')
      ])
  )
