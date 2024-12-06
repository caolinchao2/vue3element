import xForm from './xForm/index.js'
import xTable from './xTable/index.js'
import globalConfig from './common/config.js'
const components = [
  xForm,
  xTable,
]

function install(Vue, opts = {}) {
  globalConfig.set(opts)
  components.map(component => {
    Vue.component(component.name, component)
  })
}

export default {
  install,
  xForm,
  xTable,
}
