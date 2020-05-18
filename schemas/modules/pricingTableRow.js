import React from 'react'
import Emoji from 'a11y-react-emoji'
const Icon = () => <Emoji style={{ fontSize: '2rem' }} symbol='✔' />

export default {
  title: 'Pricing Table Row',
  name: 'pricingTableRow',
  type: 'object',
  icon: Icon,
  hidden: true,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'packages',
      type: 'array',
      title: 'Packages',
      description: 'Which pagackes have this feature?',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
        list: [
          {
            title: 'Package 1',
            value: 'package1'
          },
          {
            title: 'Package 2',
            value: 'package2'
          },
          {
            title: 'Package 3',
            value: 'package3'
          }
        ]
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'shortDescription',
      title: 'Short Description',
      type: 'string'
    }
  ],
  preview: {
    select: {
      title: 'title',
      packages: 'packages'
    },
    prepare ({ title, packages }) {
      // const reducer = (accumulator, currentValue) => accumulator + ' ' + currentValue
      const selectedPackages = packages.map(packageOption => {
        if (packageOption === 'package1') return 'p1'
        if (packageOption === 'package2') return 'p2'
        if (packageOption === 'package3') return 'p3'
      })
      return {
        title: `${title}`,
        subtitle: `${selectedPackages}`
      }
    }
  }
}
