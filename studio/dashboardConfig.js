export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5d4c452372bae5fdfc272815',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-mcnbn98z',
                  apiId: '2576bb38-b2e0-4726-94e1-e38af7798cad'
                },
                {
                  buildHookId: '5d4c452317b92eca333ea2b0',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-srhgyyx1',
                  apiId: '11b464bc-bac5-41d3-8056-ab976c707786'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mirzu/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-srhgyyx1.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
