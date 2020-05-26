/**
 * This is the schema definition for the rich text fields used for
 * for this blog studio. When you import it in schemas.js it can be
 * reused in other parts of the studio with:
 *  {
 *    name: 'someName',
 *    title: 'Some title',
 *    type: 'blockContent'
 *  }
 */
export default {
  title: 'Block Text',
  name: 'simpleBlockTextColumn',
  type: 'array',
  of: [
    {
      title: 'Block',
      type: 'block',
      styles: [],
      // Marks let you mark up inline text in the block editor.
      marks: {
        // Annotations can be any object structure – e.g. a link or a footnote.
        decorators: [
          { value: 'strong', title: 'Strong' },
          { value: 'italic', title: 'Italic' }
        ],
        annotations: [
          {
            title: 'URL',
            name: 'link',
            type: 'object',
            fields: [
              {
                title: 'Link',
                name: 'href',
                type: 'url',
                validation: Rule =>
                  Rule.required().uri({ scheme: ['http', 'https', 'mailto', 'tel'], allowRelative: true })
              }
            ]
          }
        ]
      }
    },
    {
      type: 'button'
    }
  ]
}
