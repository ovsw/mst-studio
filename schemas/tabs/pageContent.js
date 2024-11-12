export default {
  name: 'pageContent',
  type: 'object',
  title: 'Page Content',
  groups: [
    { name: 'main', title: 'Main' },
    { name: 'defaultMeta', title: 'Meta' }
  ],
  fields: [
    {
      type: 'pageModule',
      name: 'main',
      group: 'main'
    },
    {
      type: 'metaCard',
      name: 'meta',
      group: 'defaultMeta'
    }
  ]
}
