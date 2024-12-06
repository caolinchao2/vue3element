import { debounce, throttle, formatNumber } from "./utils"
import type { Component, App } from "vue"
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'
// import locale from 'element-plus/lib/locale/lang/zh-cn' // 因element-plus默认是英文，我们指定一下默认中文
import CLayoutPage from "./layout-page"
import CLayoutPageItem from "./layout-page-item"
import CQueryCondition from "./query-condition"
import CTable from "./table"
import CForm from "./form"
import CSelect from "./select"
import CSelectTable from "./select-table"
import CDetail from "./detail"
import CButton from "./button"
import CStepWizard from "./step-wizard"
import CTimerBtn from "./timer-btn"
import CModuleForm from "./module-form"
import CAdaptivePage from "./adaptive-page"
import CDatePicker from "./date-picker"
import CRadio from "./radio"
import CCheckbox from "./checkbox"
import CChart from "./chart"
import CTabs from "./tabs"
import CSelectIcon from "./select-icon"
import CInput from "./input"

// 存储组件列表
const components: {
  [propName: string]: Component
} = {
  CLayoutPage,
  CLayoutPageItem,
  CQueryCondition,
  CTable,
  CForm,
  CSelect,
  CSelectTable,
  CDetail,
  CButton,
  CStepWizard,
  CTimerBtn,
  CModuleForm,
  CAdaptivePage,
  CDatePicker,
  CRadio,
  CCheckbox,
  CChart,
  CTabs,
  CSelectIcon,
  CInput
}
// 插件声明：声明所有插件
// 插件注册：在 Vue 项目的入口文件中，通过 ( app.use(插件) ) 进行注册
const installComponents: any = (app: App) => {
  // components.forEach((comp: any) => {
  //   app.component(comp.name as string, comp)
  // })
  //   app.use(ElementPlus, {
  //     locale // 语言设置
  //   // size: Cookies.get('size') || 'medium' // 设置默认尺寸
  // })
  for (const key in components) {
    app.component(key, components[key])
  }
}
// vue插件
// - install：每个插件都有一个 install 方法
// - 参数：是通过 Vue.createApp() 创建的 app 实例
const install: any = (app: any, router?: any) => {
  // !router && installRouter(app);
  installComponents(app)
}
// @ts-ignore
if (typeof window !== "undefined" && window.Vue) {
  // @ts-ignore
  install(window.Vue)
}

// 按需引入
export {
  CLayoutPage,
  CLayoutPageItem,
  CQueryCondition,
  CTable,
  CForm,
  CSelect,
  CSelectTable,
  CDetail,
  CButton,
  CStepWizard,
  CTimerBtn,
  CModuleForm,
  CAdaptivePage,
  CDatePicker,
  CRadio,
  CCheckbox,
  CChart,
  CTabs,
  CSelectIcon,
  CInput
}
/**
 * @description 公共方法
 */
export { throttle, debounce, formatNumber }

export default {
  // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
  install
}
