import React from 'react'
import S from '@sanity/desk-tool/structure-builder'
import Emoji from 'a11y-react-emoji'

const TestimonialIcon = () => <Emoji style={{ fontSize: '2rem' }} symbol='⭐' />

export const TestimonialsMenuItem = S.listItem()
  .title('Testimonials')
  .icon(TestimonialIcon)
  .child(
    S.documentTypeList('testimonial')
      .title('Testimonials')
      .menuItems(S.documentTypeList('testimonial').getMenuItems())
      .filter('_type == $type')
      .params({ type: 'testimonial' })
  )
