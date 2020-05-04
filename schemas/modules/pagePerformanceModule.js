export default {
  title: 'Page Content',
  name: 'pagePerformanceModule',
  type: 'object',
  hidden: true,
  fieldsets: [
    {
      name: 'modules',
      title: 'Page Modules',
      options: {
        collapsible: true,
        collapsed: true
      }
    }
  ],
  fields: [
    {
      name: 'performanceType',
      title: 'Performance Type',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          {
            title: 'Interactive Performances',
            value: 'interactive'
          },
          {
            title: 'Game Shows',
            value: 'game'
          },
          {
            title: 'Mystery Shows',
            value: 'mystery'
          },
          {
            title: 'Custom Experiences',
            value: 'custom'
          },
          {
            title: 'Performa Judaism',
            value: 'judaism'
          }
        ]
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'ageRange',
      type: 'array',
      title: 'Age Range',
      description: 'Add keywords that describes your blog.',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
        list: [
          {
            title: 'Pre-K',
            value: 'prek'
          },
          {
            title: 'Grades K-2',
            value: 'k2'
          },
          {
            title: 'Grades 3-6',
            value: 'g3-6'
          },
          {
            title: 'Grades 7+',
            value: 'g7plus'
          },
          {
            title: 'A bit of Everything',
            value: 'mixed'
          }
        ]
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'noOfParticipants',
      type: 'array',
      title: 'No. of Participants',
      description: 'Add keywords that describes your blog.',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
        list: [
          {
            title: '1-30',
            value: 'o001030'
          },
          {
            title: '30-75',
            value: 'o030075'
          },
          {
            title: '75-150',
            value: 'o075150'
          },
          {
            title: '150-250',
            value: 'o150250'
          },
          {
            title: '250+',
            value: 'o250500'
          }
        ]
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'themes',
      type: 'array',
      title: 'Themes',
      description: 'Add keywords that describes your blog.',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
        list: [
          {
            title: 'Arts & History',
            value: 'arts-history'
          },
          {
            title: 'Arts & Culture',
            value: 'arts-culture'
          },
          {
            title: 'Charity',
            value: 'charity'
          },
          {
            title: 'Color War',
            value: 'color-war'
          },
          {
            title: 'Diversity',
            value: 'diversity'
          },
          {
            title: 'Environmental Awareness',
            value: 'environmental'
          },
          {
            title: 'Full Day Experiences',
            value: 'full-day'
          },
          {
            title: 'Fun for Adults Too',
            value: 'fun-for-adults'
          },
          {
            title: 'History',
            value: 'history'
          },
          {
            title: 'Independence',
            value: 'independence'
          },
          {
            title: 'Israel',
            value: 'israel'
          },
          {
            title: 'Literacy',
            value: 'literacy'
          },
          {
            title: 'Mystery',
            value: 'mystery'
          },
          {
            title: 'Nature',
            value: 'nature'
          },
          {
            title: 'PJ Library',
            value: 'pj-library'
          },
          {
            title: 'Respect',
            value: 'respect'
          },
          {
            title: 'STEM',
            value: 'stem'
          },
          {
            title: 'Summer Camp',
            value: 'camp'
          },
          {
            title: 'Superhero',
            value: 'superhero'
          },
          {
            title: 'Women\'s Empowerment',
            value: 'women'
          }
        ]
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'hollidays',
      type: 'array',
      title: 'Hollidays',
      description: 'Add keywords that describes your blog.',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
        list: [
          {
            title: 'Chanukah',
            value: 'chanukah'
          },
          {
            title: 'Christmas',
            value: 'christmaschristmas'
          },
          {
            title: 'Earth Day',
            value: 'earth-day'
          },
          {
            title: 'Election Day',
            value: 'election-day'
          },
          {
            title: 'Halloween',
            value: 'halloween'
          },
          {
            title: 'High Holidays',
            value: 'high-holidays'
          },
          {
            title: 'Independence Day',
            value: 'independence-day'
          },
          {
            title: 'Marthin Luther King Day',
            value: 'mlk-day'
          },
          {
            title: 'Passover',
            value: 'passover'
          },
          {
            title: 'President\'s Day',
            value: 'presidents-Day'
          },
          {
            title: 'Purim',
            value: 'purim'
          },
          {
            title: 'Shabbat',
            value: 'shabbat'
          },
          {
            title: 'Tu BiShvat',
            value: 'tu-bishvat'
          }
        ]
      },
      validation: Rule => Rule.required()
    }
  ]
}
