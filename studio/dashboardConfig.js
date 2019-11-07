export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '5dc43d8edc6219f695d99ba9',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-pmpptxsi',
                  apiId: '56b759fb-90fa-42f2-ac45-17d2c8c4df43'
                },
                {
                  buildHookId: '5dc43d8eaede55e9c044e9ea',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-dndngojn',
                  apiId: '95e2e4b5-6b94-4a2e-9478-4e2dc3a62479'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jflores353/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-dndngojn.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}
