import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/quae-doc/',
  head: [['link', { rel: 'icon', href: '/quae-doc/favicon.ico' }]],
  lastUpdated: true,
  themeConfig: {
    logo: '/logo.png',
    outline: 'deep',  // 文章右侧目录层级
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-present MakerHu'
    },
    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换'
                }
              }
            }
          }
        }
      }
    }
  },
  // 国际化
  locales: {
    root: {
      title: "Quae-魁",
      description: "A simple skeuomorphic style lightweight middle and backend template.",
      label: '简体中文',
      lang: 'zh-CN', // optional, will be added  as `lang` attribute on `html` tag
      themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        langMenuLabel: '切换语言',
        darkModeSwitchLabel: '外观',
        sidebarMenuLabel: '目录',
        returnToTopLabel: '返回顶部',
        lastUpdatedText: '上次更新',
        outlineTitle: '本章目录',
        docFooter: {
          prev: '上一篇',
          next: '下一篇',
        },
        nav: [
          { text: '指南', link: '/guide/' },
          { text: '组件', link: '/component/' }
        ],
    
        sidebar: {
          '/guide/': [
            {
              text: '指南',
              collapsed: false,
              items: [
                { text: '介绍', link: '/guide/' },
                { text: '快速上手', link: '/guide/getting-started' },
                { text: '构建与部署', link: '/guide/build-and-deploy' }
              ]
            }
          ],
          '/component/': [
            {
              text: '组件',
              items: [
                { text: '介绍', link: '/component/' },
                { text: '如何使用', link: '/component/how-to-use' },
                { text: '组件开发', link: '/component/development' }
              ]
            },
            {
              text: '基础组件',
              collapsed: false,
              items: [
                { text: '按钮', link: '/component/button' },
              ]
            }
          ]
        },
    
        socialLinks: [
          { icon: 'github', link: 'https://github.com/MakerHu/Quae' }
        ]
      },
    },
    en: {
      title: "Quae",
      description: "A simple skeuomorphic style lightweight middle and backend template.",
      label: 'English',
      lang: 'en-US',
      themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        langMenuLabel: 'Change language',
        darkModeSwitchLabel: 'Appearance',
        sidebarMenuLabel: 'Menu',
        returnToTopLabel: 'Return to top',
        lastUpdatedText: 'Updated at',
        outlineTitle: 'On this page',
        docFooter: {
          prev: 'Previous page',
          next: 'Next page',
        },
        nav: [
          { text: 'Guide', link: '/en/guide/' },
          { text: 'Component', link: '/en/component/' }
        ],

        sidebar: {
          '/en/guide/': [
            {
              text: 'Guide',
              collapsed: false,
              items: [
                { text: 'Introduction', link: '/en/guide/' },
                { text: 'Getting Started', link: '/en/guide/getting-started' },
                { text: 'Build and Deploy', link: '/en/guide/build-and-deploy' }
              ]
            },
            {
              text: 'Examples',
              collapsed: false,
              items: [
                { text: 'Markdown Examples', link: '/en/guide/markdown-examples' },
                { text: 'Runtime API Examples', link: '/en/guide/api-examples' }
              ]
            }
          ],
          '/en/component/': [
            {
              text: 'Component',
              items: [
                { text: 'Intruction', link: '/en/component/' },
                { text: 'How to use', link: '/en/component/how-to-use' },
                { text: 'Component development', link: '/en/component/development' }
              ]
            },
            {
              text: 'Basic components',
              collapsed: false,
              items: [
                { text: 'Button', link: '/en/component/button' },
              ]
            }
          ]
        },
    
        socialLinks: [
          { icon: 'github', link: 'https://github.com/MakerHu/Quae' }
        ]
      },
    }
  }
})
