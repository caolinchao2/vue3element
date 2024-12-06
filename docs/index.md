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
  - icon: 🍉
    title: 常用组件
    details: 一些常用的组件
    link: /components/
    linkText: 常用组件
  - icon: 🍉
    title: 复杂组件
    details: 一些复杂的组件
    link: /组件/tableForm/
    linkText: 复杂组件
  - icon: 🍉
    title: tableForm
    details: 快速生成tableb表格、form表单
    link: /components/tableForm/
    linkText: 嘻嘻嘻
  - icon: 📚
    title: 笔记
    details: 
    link: https://caolinchao2.github.io/cao_note/
    linkText: 常用知识点
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
