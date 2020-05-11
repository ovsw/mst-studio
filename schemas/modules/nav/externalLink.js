export default {
  title: 'External Link',
  name: 'externalLink',
  type: 'object',
  hidden: true,
  fields: [
    {
      name: 'title',
      title: 'Menu Item Title',
      description: 'ONLY use for external links. For linking to internal pages, please use the \'Internal Link\' items.',
      type: 'string',
      validation: Rule =>
        Rule.required().error('missing title')
    },
    {
      title: 'Link',
      name: 'link',
      type: 'url',
      validation: Rule =>
        Rule.required().uri({ scheme: ['http', 'https', 'mailto', 'tel'], allowRelative: false })
    }
  ]
}
