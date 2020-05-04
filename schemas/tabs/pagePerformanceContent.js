import Tabs from 'sanity-plugin-tabs'

export default {
  name: 'pagePerformanceContent',
  type: 'object',
  title: 'Page Content',
  inputComponent: Tabs,
  fieldsets: [
    { name: 'performance', title: 'Performance Attributes' },
    { name: 'main', title: 'Main' },
    { name: 'defaultMeta', title: 'Meta' }
  ],
  fields: [
    {
      type: 'pageModule',
      name: 'main',
      fieldset: 'main'
    },
    {
      type: 'pagePerformanceModule',
      name: 'performance',
      fieldset: 'performance'
    },
    {
      type: 'metaCard',
      name: 'meta',
      fieldset: 'defaultMeta'
    }
  ]
}
