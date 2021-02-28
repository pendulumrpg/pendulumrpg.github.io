module.exports = {
  title: '',
  themeConfig: {
    logo: '/images/Pendulum-Logo.svg',
    nav: [
      {text: 'Start', link: '/'},
      {text: 'Character App', link: 'https://shaimole.github.io/pendulum/'}
    ],
    sidebar :[
      {
        title: 'pg',   // required
        path: '/playground/',      // optional, link of the title, which should be an absolute path and must exist
      },  
      {
        title: 'Über Pen & Pendulum',   // required
        path: '/about/',      // optional, link of the title, which should be an absolute path and must exist
        collapsable: false, // optional, defaults to true
        sidebarDepth: 1,    // optional, defaults to 1
      },      
      {
        title: 'Abkürzungsverzeichnis',   // required
        path: '/shorts/',      // optional, link of the title, which should be an absolute path and must exist
        sidebarDepth: 0,    // optional, defaults to 1
      },
      {
        title: 'Werte',
        sidebarDepth: 3,
        path: '/stats/',
        children: [
          ['/stats/attributes/','Attribute'],
          ['/stats/skills/','Fähigkeiten'],
          ['/stats/base/','Basiswerte'],
          ['/stats/combat/','Kampfwerte'],
          ['/stats/magic/','Magiewerte'],
          ['/stats/lifereg/','Regeneration']
        ]
      },
      { 
        title: 'Charactererstellung',
        path: '/creation',
        children: [ 
          ['/creation/classes/','Berufsklassen']
        ]
      }
    ]
  }
}