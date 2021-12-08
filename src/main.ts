import { createApp } from 'vue'
import App from './App.vue'

import router from './router/index'
import store from './store/index'

import MeComponents from './components'

const app = createApp(App)

app.use(router).use(store).use(MeComponents)

app.mount('#app')
