import container from './container'
import button from './button'

const components = [...container, ...button]

const install = (Vue: any) => {
  components.map(component => {
    if (!component.name && component.install) {
      Vue.use(component)
    } else {
      Vue.component(component.name, component)
    }
  })
}

export default {
  install,
}
