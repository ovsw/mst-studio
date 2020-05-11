import Tabs from 'sanity-plugin-tabs'

export default {
  name: 'globalContent',
  type: 'object',
  inputComponent: Tabs,
  fieldsets: [
    { name: 'globalSettings', title: 'Settings' },
    { name: 'defaultMeta', title: 'Meta' },
    { name: 'social', title: 'Social' }
  ],
  fields: [
    {
      type: 'globalSettingsTab',
      name: 'gobalSettings',
      // description: 'Global Settings',
      fieldset: 'globalSettings'
    },
    {
      type: 'metaCard',
      name: 'metaInformation',
      description: 'Handles the default meta information for all content types',
      fieldset: 'defaultMeta'
    },
    {
      type: 'social',
      name: 'social',
      description: 'Handles the default meta information for all content types',
      fieldset: 'social'
    }
  ]
}
