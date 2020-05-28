import Tabs from 'sanity-plugin-tabs'

export default {
  name: 'pageWizardContent',
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
      type: 'pageWizardModule',
      name: 'main',
      fieldset: 'main'
    },
    {
      type: 'metaCard',
      name: 'meta',
      fieldset: 'defaultMeta'
    }
  ]
}
