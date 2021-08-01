module.exports = {
  plugins: [
    '@vuepress/pwa',
    {
      serviceWorker: true,
      updatePopup: true
    }
    ],
  title: '',
  head: [
    [ "link",{ rel: "stylesheet",href: "/css/styles.css"}],
    ['link', { rel: 'icon', href: 'images/Pendulum-Logo.svg' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: 'images/Pendulum-Logo.svg' }],
    ['link', { rel: 'mask-icon', href: 'images/Pendulum-Logo.svg', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: 'images/Pendulum-Logo.svg' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  themeConfig: {
    logo: '/images/Pendulum-Logo.svg',
    nav: [
      {text: 'Start', link: '/'},
      {text: 'Character App', link: 'https://shaimole.github.io/pendulum/'}
    ],
    sidebar :[
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
      },
      {
        title: 'Aktionen',   // required
        path: '/aktionen/',      // optional, link of the title, which should be an absolute path and must exist
        sidebarDepth: 1    // optional, defaults to 1
      },    
      {
        title: 'Eigenschaften',   // required
        path: '/eigenschaften/',      // optional, link of the title, which should be an absolute path and must exist
        sidebarDepth: 1    // optional, defaults to 1
      },    
      {
        title: 'Kunden',   // required
        path: '/kunden/',      // optional, link of the title, which should be an absolute path and must exist
        sidebarDepth: 1    // optional, defaults to 1
      },  
      {
        title: 'Stress',   // required
        path: '/stress/',      // optio,,iiiiiinal, link of the title, which should be an absolute path and must exist
        sidebarDepth: 2,    // optional, defaults to 1
      }, 
      {
        title: 'Fähigkeiten',   // required
        path: '/skills/',      // optional, link of the title, which should be an absolute path and must exist
        sidebarDepth: 3,    // optional, defaults to 1
        children: [
            ['/skills/handwerk/','Handwerk'],
            ['/skills/kompetenzen/','Kompetenzen'],
            ['/skills/magie/','Magie'],
            ['/skills/priest/','Priester']
        ]
      } 
    ]
  }
}