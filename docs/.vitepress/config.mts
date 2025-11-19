import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "My Portfolio",
  description: "My Portfolio site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Resources', link: '/resources/osint' },
      { text: 'Blogs', link: '/blog/introduction' },
      { text: 'Examples', link: '/examples/markdown-examples' }
    ],

    sidebar: {
      '/examples/': [
        {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/examples/markdown-examples' },
          { text: 'Resources Guide', link: '/examples/resources-guide' },
          { text: 'Runtime API Examples', link: '/examples/api-examples' }
        ]
      }
      ],

      '/blog/': [
        {
        text: 'Blog',
        items: [
          { text: 'Introduction', link: '/blog/introduction' }
        ]
      }
      ],

      '/resources/': [
        {
          text: 'Resources',
          items: [
            { text: 'OSINT', link: '/resources/osint' }
          ]
        },
        {
          text: 'Cybersecurity',
          items: [
            { text: 'Tools', link: '/resources/tools' },
            { text: 'Penetration Testing', link: '/resources/pentest' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
