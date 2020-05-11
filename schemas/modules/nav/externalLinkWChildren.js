export default {
  title: 'External Link w/ Children',
  name: 'externalLinkWChildren',
  type: 'object',
  hidden: true,
  fields: [
    {
      name: 'title',
      title: 'Menu Item Title',
      type: 'string',
      validation: Rule =>
        Rule.required().error('missing title')
    },
    {
      title: 'Link',
      description: 'ONLY use for external links. For linking to internal pages, please use the \'Internal Link\' items.',
      name: 'link',
      type: 'url',
      validation: Rule =>
        Rule.required().uri({ scheme: ['http', 'https', 'mailto', 'tel'], allowRelative: false })
    },
    {
      name: 'children',
      title: 'Sub-items',
      type: 'array',
      of: [
        { type: 'internalLink' },
        { type: 'externalLink' }
      ],
      validation: Rule =>
        Rule.required().error('missing children')
    }
  ]
}
