import React from 'react'
import S from '@sanity/desk-tool/structure-builder'
import Emoji from 'a11y-react-emoji'

const Icon = () => <Emoji style={{ fontSize: '2rem' }} symbol='📄' />
const SummerIcon = () => <Emoji style={{ fontSize: '2rem' }} symbol='🌞' />
const CalendarIcon = () => <Emoji style={{ fontSize: '2rem' }} symbol='📅' />
const JobsIcon = () => <Emoji style={{ fontSize: '2rem' }} symbol='⚒' />
const JobsYear = () => <Emoji style={{ fontSize: '2rem' }} symbol='🏂' />
const JobsSummer = () => <Emoji style={{ fontSize: '2rem' }} symbol='🏄‍♂️‍' />
const JobsForm = () => <Emoji style={{ fontSize: '2rem' }} symbol='📃‍' />
const AboutIcon = () => <Emoji style={{ fontSize: '2rem' }} symbol='🧙‍♂️' />
const DirectorsIcon = () => <Emoji style={{ fontSize: '2rem' }} symbol='🎯' />
const ContactIcon = () => <Emoji style={{ fontSize: '2rem' }} symbol='📫' />
const QuestionIcon = () => <Emoji style={{ fontSize: '2rem' }} symbol='❓' />

export const PageMenuItem = S.listItem()
  .title('Common Pages')
  .icon(Icon)
  .child(
    S.list()
      .title('Common Pages')
      .items([
        S.documentListItem()
          .id('aboutUs')
          .title('About Us')
          .icon(AboutIcon)
          .schemaType('page'),
        S.documentListItem()
          .id('ourDirectors')
          .icon(DirectorsIcon)
          .title('Our Directors')
          .schemaType('page'),
        S.documentListItem()
          .id('yearRoundStaff')
          .title('Year-Round Staff')
          .icon(CalendarIcon)
          .schemaType('page'),
        S.documentListItem()
          .id('summerStaff')
          .title('Summer Staff')
          .icon(SummerIcon)
          .schemaType('page'),
        S.divider(),
        S.documentListItem()
          .id('jobs')
          .title('Jobs')
          .schemaType('page')
          .icon(JobsIcon),
        S.documentListItem()
          .id('yearRoundPositions')
          .title('Year Round Positons')
          .icon(JobsSummer)
          .schemaType('page'),
        S.documentListItem()
          .id('campPositions')
          .title('Camp Positions')
          .icon(JobsYear)
          .schemaType('page'),
        S.documentListItem()
          .id('summerCampStaffFaqs')
          .title('Summer Camp Staff FAQs')
          .icon(QuestionIcon)
          .schemaType('page'),
        S.documentListItem()
          .id('staffApplication')
          .title('Staff Online Application')
          .icon(JobsForm)
          .schemaType('page'),
        S.divider(),
        S.documentListItem()
          .id('contactPage')
          .title('Contact us')
          .icon(ContactIcon)
          .schemaType('page'),
        S.divider(),
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
