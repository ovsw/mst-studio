import React from 'react'
import S from '@sanity/desk-tool/structure-builder'
import Emoji from 'a11y-react-emoji'

const Icon = () => <Emoji style={{ fontSize: '2rem' }} symbol='➡' />

export const RedirectsMenuItem = S.documentListItem()
  .title('Redirects')
  .id('redirects')
  .icon(Icon)
  .schemaType('redirects')
