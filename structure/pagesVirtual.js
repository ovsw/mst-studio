import React from 'react'
import S from '@sanity/desk-tool/structure-builder'
import Emoji from 'a11y-react-emoji'

const Icon = () => <Emoji style={{ fontSize: '2rem' }} symbol='💻' />

export const PageMenuItemVirtual = S.listItem()
  .title('Virtual Pages')
  .icon(Icon)
  .child(
    S.list()
      .title('Virtual Pages')
      .items([
        S.documentListItem()
          .id('virtualHome')
          .title('Virtual - Landing Page')
          .schemaType('page'),
        S.documentListItem()
          .id('virtualForOrgsHome')
          .title('Virtual Entertainment2 for Organizations')
          .schemaType('page'),
        S.documentListItem()
          .id('virtualClassesHome')
          .title('Virtual Classes for Kids')
          .schemaType('page'),
        S.documentListItem()
          .id('virtualForAdultsHome')
          .title('Virtual Entertainment for Adults')
          .schemaType('page'),
        S.documentListItem()
          .id('virtualBirthdayPartiesHome')
          .title('Virtual Birthday Parties')
          .schemaType('page')
      ])
  )
