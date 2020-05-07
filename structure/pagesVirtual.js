import React from 'react'
import S from '@sanity/desk-tool/structure-builder'
import Emoji from 'a11y-react-emoji'

const Icon = () => <Emoji style={{ fontSize: '2rem' }} symbol='💻' />
const LandingPageIcon = () => <Emoji style={{ fontSize: '2rem' }} symbol='🛬' />
const OrgsIcon = () => <Emoji style={{ fontSize: '2rem' }} symbol='🏬' />
const ClassIcon = () => <Emoji style={{ fontSize: '2rem' }} symbol='🏫' />
const AdultsIcon = () => <Emoji style={{ fontSize: '2rem' }} symbol='🧔' />
const BirthdayIcon = () => <Emoji style={{ fontSize: '2rem' }} symbol='🎂' />
const QuestionIcon = () => <Emoji style={{ fontSize: '2rem' }} symbol='❓' />
const TestimonialsIcon = () => <Emoji style={{ fontSize: '2rem' }} symbol='🌟' />

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
          .icon(LandingPageIcon)
          .schemaType('page'),
        S.documentListItem()
          .id('virtualForOrgsHome')
          .icon(OrgsIcon)
          .title('Virtual Entertainment for Organizations')
          .schemaType('page'),
        S.documentListItem()
          .id('virtualClassesHome')
          .title('Virtual Classes for Kids')
          .icon(ClassIcon)
          .schemaType('page'),
        S.documentListItem()
          .id('virtualForAdultsHome')
          .title('Virtual Entertainment for Adults')
          .icon(AdultsIcon)
          .schemaType('page'),
        S.documentListItem()
          .id('virtualBirthdayPartiesHome')
          .title('Virtual Birthday Parties')
          .icon(BirthdayIcon)
          .schemaType('page')
      ])
  )
