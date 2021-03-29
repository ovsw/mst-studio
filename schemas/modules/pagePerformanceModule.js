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
      name: 'image',
      title: 'Image',
      type: 'image',
      description: 'this image appears on the performance\'s card in the performance wizard',
      options: {
        hotspot: true
      },
      validation: Rule => Rule.required()
    },
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
            title: 'Perform Judaism',
            value: 'judaism'
          }
        ]
      },
      validation: Rule => Rule.min(1).required()
    },
    {
      name: 'ageRange',
      type: 'array',
      title: 'Age Range',
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
            value: 'g36'
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
      validation: Rule => Rule.min(1).required()
    },
    {
      name: 'noOfParticipants',
      type: 'array',
      title: 'No. of Participants',
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
      validation: Rule => Rule.min(1).required()
    },
    {
      name: 'themes',
      type: 'array',
      title: 'Themes',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
        list: [
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
            title: 'Technology',
            value: 'technology'
          },
          {
            title: 'Women\'s Empowerment',
            value: 'women'
          }
        ]
      },
      validation: Rule => Rule.min(1).required()
    },
    {
      name: 'hollidays',
      type: 'array',
      title: 'Holidays',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
        list: [
          {
            title: 'none',
            value: 'none'
          },
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
      validation: Rule => Rule.min(1).required()
    }
  ]
}
