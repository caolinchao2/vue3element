import type { DefaultTheme } from 'vitepress'
import { getSidebarData, getNavData } from '../utils/createSideBar'
// console.log(getNavData(),'getNavDatagetNavDatagetNavData')
function getNavDataItem(name: string) {
  let arr = getNavData().find((item) => item.text === name)
  arr?.items?.forEach((item, index) => {
    if (item.text === 'index') {
      arr?.items?.splice(index, 1)
    }
  })
  return arr
}
// console.log(getNavDataItem('前端'),'getNavDatagetNavDatagetNavData')

export const nav: DefaultTheme.Config['nav'] = [{ text: '主页', link: '/' }]
