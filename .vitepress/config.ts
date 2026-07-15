import { defineConfig } from 'vitepress'
import wikiNumberPlugin from './plugins/wiki-numbers.js'

const raceSidebar = [
  { text: '基础评级', link: '/Wiki/overview' },
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
]

const equipSidebar = [
  { text: '套装效果', link: '/Wiki/装备/套装效果' },
  { text: '装备强化', link: '/Wiki/装备/装备强化' },
  { text: '称号分类', link: '/Wiki/装备/称号分类' },
  { text: 'VIP礼包', link: '/Wiki/装备/VIP礼包' },
]

export default defineConfig({
  lang: 'zh-CN',
  title: '奇沌龙珠 Wiki',
  description: '奇沌龙珠 Minecraft 服务器百科全书 — 种族天赋、气武器、装备系统全攻略',

  lastUpdated: true,
  cleanUrls: true,
  metaChunk: true,

  markdown: {
    config(md) {
      md.use(wikiNumberPlugin)
    },
  },

  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#e85500' }],
    ['meta', { name: 'application-name', content: '奇沌龙珠 Wiki' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: '奇沌龙珠 Wiki' }],
    ['meta', { property: 'og:description', content: '奇沌龙珠 Minecraft 服务器百科全书 — 种族天赋、气武器、装备系统全攻略' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
  ],

  themeConfig: {
    logo: null,
    siteTitle: '奇沌龙珠 Wiki',

    nav: [
      { text: '🏠 首页', link: '/' },
      { text: '🧬 种族天赋', link: '/Wiki/overview' },
      { text: '⚔️ 气武器', link: '/Wiki/KiWeapons/气武器' },
      {
        text: '🛡️ 装备',
        items: [
          { text: '套装效果', link: '/Wiki/装备/套装效果' },
          { text: '装备强化', link: '/Wiki/装备/装备强化' },
          { text: '称号分类', link: '/Wiki/装备/称号分类' },
          { text: 'VIP礼包', link: '/Wiki/装备/VIP礼包' },
        ],
      },
    ],

    sidebar: {
      '/Wiki/overview': raceSidebar,
      '/Wiki/race/': raceSidebar,
      '/Wiki/装备/': equipSidebar,
      '/Wiki/KiWeapons/': [
        { text: '气武器表', link: '/Wiki/KiWeapons/气武器' },
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
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'short',
      },
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
      copyright: 'Built with \u2764\uFE0F and VitePress',
    },
  },
})
