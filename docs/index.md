---
layout: home
layoutClass: 'c-home-layout'

hero:
  name: 常用的组件
  text: component library
  tagline: component
  image:
    src: /logo.png
    alt: img
  actions:
    - text: 开始
      link: /前端/
    # - text: 导航
    #   link: /nav/
    #   theme: alt
features:
  - icon: 📖
    title: tableForm
    details: 快速生成tableb表格、form表单
    link: /组件/tableForm/
    linkText: 嘻嘻嘻
  - icon: 📚
    title: 笔记
    details: 
    link: https://caolinchao2.github.io/cao_note/
    linkText: 常用知识点
  - icon: 🍉
    title: 占位
    details: 占位占位占位
    # link: /TechToolkit/
    linkText: 占位占位占位
  - icon: 🍉
    title: 笔记
    details: 占位占位占位
    # link: /TechToolkit/
    linkText: 占位占位占位
  # - icon: 📘
  #   title: 源码阅读
  #   details: 了解各种库的实现原理<br />学习其中的小技巧和冷知识
  #   link: https://notes.fe-mm.com/analysis/utils/only-allow
  #   linkText: 源码阅读
  # - icon: 💡
  #   title: Workflow
  #   details: 在工作中学到的一切<small>（常用库/工具/奇淫技巧等）</small><br />配合 CV 大法来更好的摸鱼
  #   link: https://notes.fe-mm.com/workflow/utils/library
  #   linkText: 常用工具库
  # - icon: 🧰
  #   title: 提效工具
  #   details: 工欲善其事，必先利其器<br />记录开发和日常使用中所用到的软件、插件、扩展等
  #   link: /efficiency/online-tools
  #   linkText: 提效工具
  # - icon: 🐞
  #   title: 踩坑记录
  #   details: 那些年我们踩过的坑<br />总有一些让你意想不到的问题
  #   link: https://notes.fe-mm.com/pit/npm
  #   linkText: 踩坑记录
---

<style>
.c-home-layout .image-src{
  /* border-radius: 50%; */
}
/*爱的魔力转圈圈*/
.c-home-layout .image-src:hover {
  transform: translate(-50%, -50%) rotate(666turn);
  transition: transform 59s 1s cubic-bezier(0.3, 0, 0.8, 1);
}

.c-home-layout .details small {
  opacity: 0.8;
}

.c-home-layout .bottom-small {
  display: block;
  margin-top: 2em;
  text-align: right;
}
</style>
