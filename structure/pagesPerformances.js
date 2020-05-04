import React from 'react'
import S from '@sanity/desk-tool/structure-builder'
import Emoji from 'a11y-react-emoji'
import { MdBook } from 'react-icons/md'

const Icon = () => <Emoji style={{ fontSize: '2rem' }} symbol='🎭' />
const FindIcon = () => <Emoji style={{ fontSize: '2rem' }} symbol='🔎' />
const BookIcon = () => <Emoji style={{ fontSize: '2rem' }} symbol='📚' />
const LandingPageIcon = () => <Emoji style={{ fontSize: '2rem' }} symbol='🛬' />
const QuestionIcon = () => <Emoji style={{ fontSize: '2rem' }} symbol='❓' />
const TestimonialsIcon = () => <Emoji style={{ fontSize: '2rem' }} symbol='🌟' />

export const PageMenuItemPerformances = S.listItem()
  .title('Performances Pages')
  .icon(Icon)
  .child(
    S.list()
      .title('Performances Pages')
      .items([
        S.documentListItem()
          .id('performancesHome')
          .title('Performances - Landing Page')
          .icon(LandingPageIcon)
          .schemaType('page'),
        S.documentListItem()
          .id('findYourPerformance')
          .title('Find your Performance Page')
          .schemaType('page')
          .icon(FindIcon),
        S.documentListItem()
          .id('performanceDirectory')
          .title('Performance Directory Page')
          .schemaType('page')
          .icon(BookIcon),
        S.listItem()
          .id('performanceListFolder')
          .icon(Icon)
          .title('Performances Repository')
          .schemaType('post')
          .child(S.documentTypeList('pagePerformance').title('Performances')),
        S.documentListItem()
          .id('performancesFAQs')
          .title('FAQs')
          .icon(QuestionIcon)
          .schemaType('page'),
        S.documentListItem()
          .id('performancesTestimonials')
          .icon(TestimonialsIcon)
          .title('Performances Testimonials')
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
