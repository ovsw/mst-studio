import Tabs from 'sanity-plugin-tabs'

export default {
  name: 'authorContent',
  type: 'object',
  title: 'Page Content',
  inputComponent: Tabs,
  fieldsets: [
    { name: 'main', title: 'Main' },
    { name: 'defaultMeta', title: 'Meta' }
  ],
  fields: [
    {
      type: 'authorModule',
      name: 'main',
      fieldset: 'main'
    }
  ]
}
