import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: '奇沌龙珠 Wiki',
  description: '奇沌龙珠 Minecraft 服务器百科全书 - 种族天赋、气武器、装备系统',

  lastUpdated: true,
  cleanUrls: true,

  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#e85500' }],
  ],

  themeConfig: {
    logo: null,
    siteTitle: '奇沌龙珠 Wiki',

    nav: [
      { text: '首页', link: '/' },
      { text: '种族天赋', link: '/Wiki/overview' },
      { text: '气武器', link: '/Wiki/KiWeapons/气武器' },
      {
        text: '装备',
        items: [
          { text: '套装效果', link: '/Wiki/装备/套装效果' },
          { text: '装备强化', link: '/Wiki/装备/装备强化' },
          { text: '称号分类', link: '/Wiki/装备/称号分类' },
          { text: 'VIP礼包', link: '/Wiki/装备/VIP礼包' },
        ],
      },
    ],

    sidebar: {
      '/Wiki/race/': [
        {
          text: '赛亚人',
          collapsed: false,
          items: [
            { text: '赛亚人血脉', link: '/Wiki/race/saiyan/赛亚人血脉' },
            { text: '超级赛亚人', link: '/Wiki/race/saiyan/超级赛亚人' },
            { text: '原始赛亚人', link: '/Wiki/race/saiyan/原始赛亚人' },
            { text: '赛亚人之神', link: '/Wiki/race/saiyan/赛亚人之神' },
            { text: '神之赛亚人', link: '/Wiki/race/saiyan/神之赛亚人' },
          ],
        },
        {
          text: '人类',
          collapsed: false,
          items: [
            { text: '人类路线', link: '/Wiki/race/human/人类路线' },
            { text: '人造人路线', link: '/Wiki/race/human/人造人路线' },
          ],
        },
        {
          text: '弗利萨',
          collapsed: false,
          items: [
            { text: '白金', link: '/Wiki/race/arcosian/白金' },
            { text: '黑金', link: '/Wiki/race/arcosian/黑金' },
          ],
        },
        {
          text: '魔人',
          collapsed: false,
          items: [
            { text: '恶魔', link: '/Wiki/race/majin/恶魔' },
          ],
        },
        {
          text: '那美克',
          collapsed: false,
          items: [
            { text: '神龙', link: '/Wiki/race/namek/神龙' },
            { text: '孽龙', link: '/Wiki/race/namek/孽龙' },
          ],
        },
      ],
      '/Wiki/装备/': [
        {
          text: '装备系统',
          collapsed: false,
          items: [
            { text: '套装效果', link: '/Wiki/装备/套装效果' },
            { text: '装备强化', link: '/Wiki/装备/装备强化' },
            { text: '称号分类', link: '/Wiki/装备/称号分类' },
            { text: 'VIP礼包', link: '/Wiki/装备/VIP礼包' },
          ],
        },
      ],
      '/Wiki/KiWeapons/': [
        {
          text: '气武器',
          collapsed: false,
          items: [
            { text: '气武器表', link: '/Wiki/KiWeapons/气武器' },
          ],
        },
      ],
    },

    outline: {
      level: [2, 3],
      label: '本页目录',
    },

    docFooter: {
      prev: '上一页',
      next: '下一页',
    },

    lastUpdated: {
      text: '最后更新',
    },

    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索文档',
          },
          modal: {
            noResultsText: '未找到相关结果',
            resetButtonTitle: '清除搜索条件',
            footer: {
              selectText: '选择',
              navigateText: '切换',
              closeText: '关闭',
            },
          },
        },
      },
    },

    footer: {
      message: '奇沌龙珠 Minecraft 服务器 Wiki',
      copyright: 'Built with VitePress',
    },
  },
})
