import { defineConfig } from 'vitepress'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'

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
          { text: 'Handy Tools I\'ve Been Using Recently', link: '/blog/handy-tools' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/dvelikiy' },
      { icon: 'youtube', link: 'https://www.youtube.com/@DmitryVelikiyWeb' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/dmitry-velikiy/' }
    ],
  },
  lastUpdated: true,
  vite: {
    plugins: [
      ViteImageOptimizer({
        png: {
          quality: 95
        },
        jpg: {
          quality: 95
        },
      })
    ]
  },
  head: [
    [
      'script',
      {
        async: true,
        src: 'https://cdn.jsdelivr.net/npm/canvas-confetti@1.9.3/dist/confetti.browser.min.js',
      }
    ], [
      'script',
      {},
      `
      function randomInRange(min, max) {
        return Math.random() * (max - min) + min;
      }

      const doRandomConfetti = () => {
        confetti({
          angle: randomInRange(55, 125),
          spread: randomInRange(50, 70),
          particleCount: randomInRange(50, 100),
          origin: { y: 0.6 }
        });
      }

      setTimeout(function() {
        const button = document.querySelector('.VPButton');
        button.addEventListener('click', doRandomConfetti);
      }, 1000);

      `
    ]
  ]
})
