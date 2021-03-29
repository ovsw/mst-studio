export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
    //   }
    // },
    // {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              title: 'Push Published Content to live site.',
              description:
                'NOTE: to make newly-published content appear in the front-end of the live website, you need to manally trigger a deploy by clicking the button below that says "Deploy"!',
              sites: [
                // {
                //   buildHookId: '5deb9176f80a08d42b13d0e2',
                //   title: 'Sanity Studio',
                //   name: 'lrw-app-studio',
                //   apiId: '1e783139-c816-42c5-a6cf-95d7f294ccaf'
                // },
                {
                  buildHookId: '5ede10204265ff57f14f0d1b',
                  title: 'mainstages Website Front-End',
                  name: 'mainstages',
                  apiId: '61cadf24-a465-436d-9ba2-bae7ec5310f9'
                }
              ]
            }
          }
        ]
        // data: [
        //   {
        //     title: 'GitHub repo',
        //     value: 'https://github.com/ovsw/mdc-app',
        //     category: 'Code'
        //   },
        //   { title: 'Frontend', value: 'https://mainstages.netlify.app', category: 'apps' }
        // ]
      }
    }
    // {name: 'project-users', layout: {height: 'auto'}},
    // {
    //   name: 'document-list',
    //   options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
    //   layout: {width: 'medium'}
    // }
  ]
}
