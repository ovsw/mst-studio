import React from 'react'
import S from '@sanity/desk-tool/structure-builder'
import Emoji from 'a11y-react-emoji'

const Icon = () => <Emoji style={{ fontSize: '2rem' }} symbol='📄' />

export const PageMenuItem = S.listItem()
  .title('Common Pages')
  .icon(Icon)
  .child(
    S.list()
      .title('Virtual Pages')
      .items([
        S.documentListItem()
          .id('aboutUs')
          .title('About Us')
          .schemaType('page'),
        S.documentListItem()
          .id('ourDirectors')
          .title('Our Directors')
          .schemaType('page'),
        S.documentListItem()
          .id('yearRoundStaff')
          .title('Year-Round Staff')
          .schemaType('page'),
        S.documentListItem()
          .id('summerStaff')
          .title('Summer Staff')
          .schemaType('page'),
        S.documentListItem()
          .id('siteReport')
          .title('Site Report')
          .schemaType('page'),
        S.documentListItem()
          .id('photoUploader')
          .title('Photo Uploader')
          .schemaType('page'),
        S.documentListItem()
          .id('makeAPayment')
          .title('Make a Payment')
          .schemaType('page')
      ])
  )
