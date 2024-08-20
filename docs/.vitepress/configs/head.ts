import type { HeadConfig } from 'vitepress'
let APP_BASE_PATH_favicon = '/favicon.ico'
if(process.env.NODE_ENV !== 'development'){
  APP_BASE_PATH_favicon = '/x_c_note/favicon.ico'
}
export const head: HeadConfig[] = [
  ['meta', { name: 'theme-color', content: '#3eaf7c' }],
  ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
  ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
  ['link', { rel: 'apple-touch-icon', href: APP_BASE_PATH_favicon }],
  ['link', { rel: 'icon', href: APP_BASE_PATH_favicon }],
  ['link', { rel: 'mask-icon', href: APP_BASE_PATH_favicon, color: '#3eaf7c' }],
  ['meta', { name: 'msapplication-TileImage', content: APP_BASE_PATH_favicon }],
  ['meta', { name: 'msapplication-TileColor', content: '#000000' }],
]
