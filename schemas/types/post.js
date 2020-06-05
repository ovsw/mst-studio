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
      date: 'content.main.publishedAt',
      authorName: 'content.main.author.content.main.name',
      authorImage: 'content.main.author.content.main.image'
    },
    prepare ({ title, date, authorName, authorImage }) {
      let dateString = ''
      const authorString = authorName || 'Missing Author'
      if (date) {
        const dateArray = date.split('-')
        const month = parseInt(dateArray[2].split('T')[0], 10)
        dateString = `${dateArray[1]}-${month}-${dateArray[0]}`
      } else {
        dateString = 'Missing Date'
      }
      return {
        title: title,
        subtitle: `${dateString} - ${authorString}`,
        media: authorImage
      }
    }
  },
  orderings: [
    {
      title: 'Post Date, New',
      name: 'publishedAtDesc',
      by: [
        { field: 'content.main.publishedAt', direction: 'desc' }
      ]
    },
    {
      title: 'Post Date, Old',
      name: 'publishedAtAsc',
      by: [
        { field: 'content.main.publishedAt', direction: 'asc' }
      ]
    }
  ]
}
