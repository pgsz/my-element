import { createApp } from 'vue'
import App from './App.vue'

import router from './router/index'
import store from './store/index'

import PgComponents from './components'

const app = createApp(App)

app.config.globalProperties.$PGELEMENT = {
  size:'large'
}

app.use(router).use(store).use(PgComponents)

app.mount('#app')
