import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "A7OK",
  description: "Portfolio site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Resources', link: '/resources/osint' },
      { text: 'Blogs', link: '/blog/introduction' }
    ],

    sidebar: {
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
            { text: 'OSINT', link: '/resources/osint' },
            { text: 'Development', link: '/resources/development' },
            { text: 'Forensic', link: '/resources/forensic' },
            { text: 'ML & AI', link: '/resources/ml-ai' },
            { text: 'Cryptography', link: '/resources/cryptography' }
          ]
        },
        {
          text: 'Cybersecurity',
          items: [
            { text: 'Tools', link: '/resources/tools' },
            { text: 'Penetration Testing', link: '/resources/pentest' },
            { text: 'Malware Analysis', link: '/resources/malware-analysis' },
            { text: 'CTF', link: '/resources/ctf' },
            { text: 'Information', link: '/resources/information' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/MuniirAhmadi' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/muniirahmadi' }
    ]
  }
})
