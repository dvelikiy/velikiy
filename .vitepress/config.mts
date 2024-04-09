import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Velikiy",
  description: "Personal website of Dmitry Velikiy",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Blog', link: '/blog/handy-tools' }
    ],

    sidebar: [
      {
        text: 'Blog',
        items: [
          { text: 'Handy tools I\'ve been using recently', link: '/blog/handy-tools' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/dvelikiy' },
      // { icon: 'linkedin', link: 'https://github.com/dvelikiy' }
    ],
  },
  lastUpdated: true,
})
