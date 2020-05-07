export default {
  name: 'post',
  title: 'Blog Post',
  type: 'document',
  fields: [
    {
      name: 'content',
      type: 'postContent'
    }
  ],

  preview: {
    select: {
      title: 'content.main.title',
      subtitle: 'heroText'
    }
  }
}
