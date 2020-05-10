export default {
  title: 'Image With Text it',
  name: 'imageWTextOverModule',
  type: 'object',
  hidden: true,
  fields: [
    {
      name: 'theme',
      title: 'Theme',
      type: 'string',
      validation: Rule => Rule.required('missing theme'),
      options: {
        list: [
          {
            title: 'Side by side',
            value: 'sideBySide'
          },
          {
            title: 'Overlapping',
            value: 'overlapping'
          }
        ]
      }
    },
    {
      name: 'layout',
      title: 'Layout',
      type: 'string',
      validation: Rule => Rule.required('missing layout'),
      options: {
        list: [
          {
            title: 'Text Left',
            value: 'left'
          },
          {
            title: 'Text Right',
            value: 'right'
          }
        ]
      }
    },
    {
      name: 'text',
      title: 'Text',
      type: 'simpleBlockTextEnhanced',
      validation: Rule => Rule.required('missing text')
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true
      },
      validation: Rule => Rule.required().error('missing image')
    },
    {
      name: 'caption',
      title: 'ALT Text',
      type: 'string',
      validation: Rule => Rule.required('missing image alt text')
    }
  ],
  preview: {
    select: {
      blocks: 'text',
      image: 'image'
    },
    prepare ({ blocks, image }) {
      const block = (blocks || []).find(block => block._type === 'block')
      const exceprt =
      block
        ? block.children.filter(child => child._type === 'span')
          .map(span => span.text)
          .join('')
        : 'No title'

      return {
        title: `[Img w/ Text] ${exceprt}`,
        media: image
      }
    }
  }
}
