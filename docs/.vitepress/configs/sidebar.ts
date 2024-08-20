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
  '/组件/': [
    {
      text: 'tableForm',
      collapsed: false,
      items: [
        { text: '一、form', link: '/组件/tableForm/form' },
        { text: '二、table', link: '/组件/tableForm/table' },
      ],
    },
  ],
}
