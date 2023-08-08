import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/quae-doc/',
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
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
          zh: {
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
      title: "Quae",
      description: "A simple skeuomorphic style lightweight middle and backend template.",
      label: 'English',
      lang: 'en-US',
      themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        outlineTitle: 'On this page',
        docFooter: {
          prev: 'Previous page',
          next: 'Next page',
        },
        lastUpdated: {
          text: 'Updated at',
          formatOptions: {
            dateStyle: 'full',
            timeStyle: 'medium'
          }
        },
        nav: [
          { text: 'Guide', link: '/guide/' },
          { text: 'Component', link: '/component/' }
        ],

        sidebar: {
          '/guide/': [
            {
              text: 'Guide',
              collapsed: false,
              items: [
                { text: 'Introduction', link: '/guide/' },
                { text: 'Getting Started', link: '/guide/getting-started' },
                { text: 'Build and Deploy', link: '/guide/build-and-deploy' }
              ]
            },
            {
              text: 'Examples',
              collapsed: false,
              items: [
                { text: 'Markdown Examples', link: '/guide/markdown-examples' },
                { text: 'Runtime API Examples', link: '/guide/api-examples' }
              ]
            }
          ],
          '/component/': [
            {
              text: '组件',
              items: [
                { text: '介绍', link: '/component/' },
                { text: '如何使用', link: '/component/button' },
                { text: '组件开发', link: '/component/development' }
              ]
            },
            {
              text: '基础组件',
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
    zh: {
      title: "Quae-魁",
      description: "A simple skeuomorphic style lightweight middle and backend template.",
      label: '简体中文',
      lang: 'zh-CN', // optional, will be added  as `lang` attribute on `html` tag
      themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        outlineTitle: '本章目录',
        docFooter: {
          prev: '上一篇',
          next: '下一篇',
        },
        lastUpdated: {
          text: '最后更新于',
          formatOptions: {
            dateStyle: 'full',
            timeStyle: 'medium'
          }
        },
        nav: [
          { text: '指南', link: '/zh/guide/' },
          { text: '组件', link: '/zh/component/' }
        ],
    
        sidebar: {
          '/zh/guide/': [
            {
              text: '指南',
              collapsed: false,
              items: [
                { text: '介绍', link: '/zh/guide/' },
                { text: '快速上手', link: '/zh/guide/getting-started' },
                { text: '构建与部署', link: '/zh/guide/build-and-deploy' }
              ]
            }
          ],
          '/zh/component/': [
            {
              text: '组件',
              items: [
                { text: '介绍', link: '/zh/component/' },
                { text: '如何使用', link: '/zh/component/button' },
                { text: '组件开发', link: '/zh/component/development' }
              ]
            },
            {
              text: '基础组件',
              items: [
                { text: '按钮', link: '/zh/component/button' },
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
