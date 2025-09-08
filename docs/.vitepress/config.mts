import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "A70K",
  description: "My Portfolio",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/resources' },
      { text: 'CTFs', link: '/ctf/newbie' }
    ],

    search: {
      provider: 'local'
    },

    sidebar: {
      '/guide/': [
      {
        text: 'Examples',
        items: [
          { text: 'Resources', link: '/guide/resources' }
        ]
      }
    ],
      '/ctf/': [
        {
          text: 'CTFs',
          items: [
            { text: 'Newbie', link: '/ctf/newbie' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/MuniirAhmadi' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/muniirahmadi/' }
    ]
  }
})
