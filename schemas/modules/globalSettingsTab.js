export default {
  title: 'Settings',
  name: 'globalSettingsTab',
  type: 'object',
  // hidden: true,
  fieldsets: [
    {
      name: 'address',
      title: 'Address',
      options: {
        collapsible: true,
        collapsed: true
      }
    },
    {
      name: 'contactInfo',
      title: 'Contact Info',
      options: {
        collapsible: true,
        collapsed: true
      }
    }
  ],
  fields: [
    {
      name: 'addressStreet',
      title: 'Street Address',
      type: 'string',
      fieldset: 'address'
    },
    {
      name: 'addressLocality',
      title: 'Locality',
      type: 'string',
      fieldset: 'address'
    },
    {
      name: 'addressRegion',
      title: 'Region',
      type: 'string',
      fieldset: 'address'
    },
    {
      name: 'addressZip',
      title: 'Zip Code',
      type: 'string',
      fieldset: 'address'
    },
    {
      name: 'contactEmail',
      title: 'Main Email Address',
      type: 'string',
      fieldset: 'contactInfo'
    },
    {
      name: 'contactPhone',
      title: 'Phone number',
      type: 'string',
      fieldset: 'contactInfo'
    }
  ]
}
