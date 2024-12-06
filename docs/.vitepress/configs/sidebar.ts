import type { DefaultTheme } from 'vitepress'
import { getSidebarData, getNavData } from '../utils/createSideBar'

function getSidebarDataItem(name: string) {
  let arr = getSidebarData()[name]
  arr.forEach((item, index) => {
    item.items.forEach((item2, index2) => {
      if (item2.text === 'code') {
        item.items.splice(index2, 1)
      }
    })
  })
  return arr
}
// console.log(getNavDataItem('前端'),'getNavDatagetNavDatagetNavData')

export const sidebar: DefaultTheme.Config['sidebar'] = {
  '/components/': [
    {
      text: '常用组件',
      collapsed: false,
      items: [
        { text: '一、input', link: '/components/CInput/index' },
      ],
    },
    {
      text: 'tableForm',
      collapsed: false,
      items: [
        { text: '一、form', link: '/components/tableForm/form' },
        { text: '二、table', link: '/components/tableForm/table' },
      ],
    },
  ],
}
