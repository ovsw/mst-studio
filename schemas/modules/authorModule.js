export default {
  title: 'Page Content',
  name: 'authorModule',
  type: 'object',
  hidden: false,
  fieldsets: [
    {
      name: 'modules',
      title: 'Modules',
      options: {
        collapsible: true,
        collapsed: false
      }
    }
  ],
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string'
    },
    {
      name: 'role',
      title: 'Role/Title/Position',
      type: 'string'
    },
    {
      name: 'shortBio',
      title: 'Short Bio',
      type: 'simpleBlockText'
    },
    {
      name: 'image',
      title: 'Avatar Image',
      type: 'image',
      options: {
        hotspot: true
      }
    }
  ]
}
