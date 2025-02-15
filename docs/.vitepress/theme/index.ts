import { h, watch } from 'vue'
import { useData, EnhanceAppContext } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import "element-plus/theme-chalk/dark/css-vars.css"
import { createMediumZoomProvider } from './composables/useMediumZoom'
import Xcrud from "../../../packages/formTable/index.js";
import MLayout from './components/MLayout.vue'
import MNavLinks from './components/MNavLinks.vue'
import zhCn from "element-plus/es/locale/lang/zh-cn";
import CuiPlus from "../../../packages"
import './styles/index.scss'
// 图标并进行全局注册
import * as ElementPlusIconsVue from "@element-plus/icons-vue"
let homePageStyle: HTMLStyleElement | undefined

export default {
  extends: DefaultTheme,
  Layout: () => {
    const props: Record<string, any> = {}
    // 获取 frontmatter
    const { frontmatter } = useData()

    /* 添加自定义 class */
    if (frontmatter.value?.layoutClass) {
      props.class = frontmatter.value.layoutClass
    }

    return h(MLayout, props)
  },
  enhanceApp({ app, router }: EnhanceAppContext) {
    createMediumZoomProvider(app, router)

    app.component('MNavLinks', MNavLinks)

    if (typeof window !== 'undefined') {
      app.use(ElementPlus, {
        locale: zhCn,
      });
      // 注册所有图标
      for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
        app.component(key, component)
      }
      app.use(Xcrud);
      app.use(CuiPlus);
      watch(
        () => router.route.data.relativePath,
        () =>
          updateHomePageStyle(
            /* /vitepress-nav-template/ 是为了兼容 GitHub Pages */
            location.pathname === '/' || location.pathname === '/vitepress-nav-template/',
          ),
        { immediate: true },
      )
    }
  },
}

if (typeof window !== 'undefined') {
  // detect browser, add to class for conditional styling
  const browser = navigator.userAgent.toLowerCase()
  if (browser.includes('chrome')) {
    document.documentElement.classList.add('browser-chrome')
  } else if (browser.includes('firefox')) {
    document.documentElement.classList.add('browser-firefox')
  } else if (browser.includes('safari')) {
    document.documentElement.classList.add('browser-safari')
  }
}

// Speed up the rainbow animation on home page
function updateHomePageStyle(value: boolean) {
  if (value) {
    if (homePageStyle) return

    homePageStyle = document.createElement('style')
    homePageStyle.innerHTML = `
    :root {
      animation: rainbow 12s linear infinite;
    }`
    document.body.appendChild(homePageStyle)
  } else {
    if (!homePageStyle) return

    homePageStyle.remove()
    homePageStyle = undefined
  }
}
