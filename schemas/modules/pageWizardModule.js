export default {
  title: 'Page Content',
  name: 'pageWizardModule',
  type: 'object',
  hidden: true,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'content',
      title: 'Text',
      type: 'simpleBlockText'
    }
  ]
}
