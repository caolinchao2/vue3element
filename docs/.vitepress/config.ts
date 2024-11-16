import { basename } from 'node:path'
import { defineConfig } from 'vitepress'
import MarkdownPreview from 'vite-plugin-markdown-preview'
import { head, nav, sidebar,algolia } from './configs'

const APP_BASE_PATH = 'component'
// const APP_BASE_PATH = basename(process.env.GITHUB_REPOSITORY || '')

export default defineConfig({
  outDir: '../dist',
  base: APP_BASE_PATH ? `/${APP_BASE_PATH}/` : '/',

  lang: 'zh-CN',
  title: 'Cao Note',
  description: '前端常用知识、源码阅读笔记、各种奇淫技巧、日常提效工具等',
  head,

  lastUpdated: true,
  cleanUrls: true,
  ignoreDeadLinks: true,
  /* markdown 配置 */
  markdown: {
    lineNumbers: true,
  },

  /* 主题配置 */
  themeConfig: {
    i18nRouting: false,

    logo: '/logo.png',

    nav,
    sidebar,
    /* 右侧大纲配置 */
    outline: {
      level: 'deep',
      label: '本页目录',
    },

    socialLinks: [{ icon: 'github', link: 'https://gitee.com/cao-linchao/x_c_note' }],
    editLink: {
      pattern: 'https://gitee.com/cao-linchao/component/edit/master/docs/:path',
      text: '在Gitee上编辑此页 '
    },
    footer: {
      // message: '如有转载或 CV 的请标注本站原文地址',
      copyright: 'Copyright © 2024-present xiaocao',
    },

    darkModeSwitchLabel: '外观',
    returnToTopLabel: '返回顶部',
    lastUpdatedText: '上次更新',
    /* Algolia DocSearch 配置 */
    algolia,
    docFooter: {
      prev: '上一篇',
      next: '下一篇',
    },
  },

  vite: {
    plugins: [MarkdownPreview(),],
    resolve: {
      // 省略 .vue 文件后缀
      extensions: [".vue",".js", ".jsx", ".ts", ".tsx"],
      // 自动补全文件名
      // 文件名后面加上 .jsx 或 .ts 或 .tsx
      dedupe: ["vue"],
    },
  },
})
