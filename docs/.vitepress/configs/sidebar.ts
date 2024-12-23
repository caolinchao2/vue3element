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
        { text: '一、input输入框', link: '/components/CInput/index' },
        { text: '二、select选择器', link: '/components/Cselect/index' },
        { text: '三、detail详情', link: '/components/Cdetail/index' },
        { text: '四、button防抖按钮', link: '/components/Cbutton/index' },
        { text: '五、图标选择组件', link: '/components/图标选择组件/index' },
        { text: '六、下拉选择表格', link: '/components/CselectTable/index' },
        { text: '七、虚拟列表下拉选择表格', link: '/components/虚拟列表下拉选择表格/index' },
        { text: '八、表单组件', link: '/components/tableForm/form' },
        { text: '九、表格组件', link: '/components/tableForm/table' },
      ],
    },
    // {
    //   text: 'tableForm',
    //   collapsed: false,
    //   items: [
    //     { text: '一、form', link: '/components/tableForm/form' },
    //     { text: '二、table', link: '/components/tableForm/table' },
    //   ],
    // },
  ],
}
