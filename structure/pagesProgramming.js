import React from 'react'
import S from '@sanity/desk-tool/structure-builder'
import Emoji from 'a11y-react-emoji'

const Icon = () => <Emoji style={{ fontSize: '2rem' }} symbol='⛺' />
const PackageIcon = () => <Emoji style={{ fontSize: '2rem' }} symbol='📦' />
const PackageIcon2 = () => <Emoji style={{ fontSize: '2rem' }} symbol='🎁' />
const StaffingIcon = () => <Emoji style={{ fontSize: '2rem' }} symbol='🤼' />
const ProgramDevIcon = () => <Emoji style={{ fontSize: '2rem' }} symbol='❗' />
const SuppliesIcon = () => <Emoji style={{ fontSize: '2rem' }} symbol='👗' />
const MarketingIcon = () => <Emoji style={{ fontSize: '2rem' }} symbol='📯' />
const LandingPageIcon = () => <Emoji style={{ fontSize: '2rem' }} symbol='🛬' />
const SupportIcon = () => <Emoji style={{ fontSize: '2rem' }} symbol='💁‍♂️' />
const OptionsIcon = () => <Emoji style={{ fontSize: '2rem' }} symbol='📑' />
const QuestionIcon = () => <Emoji style={{ fontSize: '2rem' }} symbol='❓' />
const TestimonialsIcon = () => <Emoji style={{ fontSize: '2rem' }} symbol='🌟' />
const TestimonialsIcon2 = () => <Emoji style={{ fontSize: '2rem' }} symbol='✨' />
const QuoteIcon = () => <Emoji style={{ fontSize: '2rem' }} symbol='💲' />

export const PageMenuItemProgramming = S.listItem()
  .title('Programming Pages')
  .icon(Icon)
  .child(
    S.list()
      .title('Programming Pages')
      .items([
        // S.documentListItem()
        //   .id('programmingHome')
        //   .title('Programming - Landing Page')
        //   .icon(LandingPageIcon)
        //   .schemaType('page'),
        S.documentListItem()
          .id('ourCampPackage')
          .title('Camp Package')
          .schemaType('page')
          .icon(PackageIcon),
        S.listItem()
          .id('campPackageFolder')
          .icon(PackageIcon2)
          .title('Camp Package Contents')
          .schemaType('post')
          .child(
            S.list()
              .title('Camp Package Contents')
              .items([
                S.documentListItem()
                  .id('cpStaffingTraining')
                  .title('Staffing & Training')
                  .icon(StaffingIcon)
                  .schemaType('page'),
                S.documentListItem()
                  .id('cpProgramDevelopment')
                  .title('Program Development')
                  .icon(ProgramDevIcon)
                  .schemaType('page'),
                S.documentListItem()
                  .id('cpProductionSupplies')
                  .title('Production Supplies')
                  .icon(SuppliesIcon)
                  .schemaType('page'),
                S.documentListItem()
                  .id('cpMarketingPublicity')
                  .title('Marketing & Publicity')
                  .icon(MarketingIcon)
                  .schemaType('page'),
                S.documentListItem()
                  .id('cpSupervisionSupport')
                  .title('Supervision & Support')
                  .icon(SupportIcon)
                  .schemaType('page')
              ])
          ),
        S.documentListItem()
          .id('afterschoolPackage')
          .title('After-school Package')
          .schemaType('page')
          .icon(PackageIcon),
        S.listItem()
          .id('aftersschoolPackageFolder')
          .icon(PackageIcon2)
          .title('After-school Package Contents')
          .schemaType('post')
          .child(
            S.list()
              .title('After-school Package Contents')
              .items([
                S.documentListItem()
                  .id('asStaffingTraining')
                  .title('Staffing & Training')
                  .icon(StaffingIcon)
                  .schemaType('page'),
                S.documentListItem()
                  .id('asProgramDevelopment')
                  .title('Program Development')
                  .icon(ProgramDevIcon)
                  .schemaType('page'),
                S.documentListItem()
                  .id('asProductionSupplies')
                  .title('Production Supplies')
                  .icon(SuppliesIcon)
                  .schemaType('page'),
                S.documentListItem()
                  .id('asMarketingPublicity')
                  .title('Marketing & Publicity')
                  .icon(MarketingIcon)
                  .schemaType('page'),
                S.documentListItem()
                  .id('asSupervisionSupport')
                  .title('Supervision & Support')
                  .icon(SupportIcon)
                  .schemaType('page'),
                S.documentListItem()
                  .id('asProgramOptions')
                  .title('After-school Program Options')
                  .icon(OptionsIcon)
                  .schemaType('page')
              ])
          ),
        S.documentListItem()
          .id('programmingFAQs')
          .title('FAQs')
          .icon(QuestionIcon)
          .schemaType('page'),
        S.documentListItem()
          .id('programmingTestimonials')
          .icon(TestimonialsIcon)
          .title('Testimonials')
          .schemaType('page'),
        S.documentListItem()
          .id('programmingStaffTestimonials')
          .icon(TestimonialsIcon2)
          .title('Staff Testimonials')
          .schemaType('page'),
        S.documentListItem()
          .id('programmingQuote')
          .icon(QuoteIcon)
          .title('Get Program Quote')
          .schemaType('page')
      ])
  )
