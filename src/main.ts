// import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './assets/index.css'
import App from './App.vue'
import router from './router'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import { configureEcho } from '@laravel/echo-vue'

const app = createApp(App)

const pinia = createPinia()

pinia.use(piniaPluginPersistedstate)

configureEcho({
  broadcaster: 'reverb',
})

app.use(pinia)
app.use(router)

app.mount('#app')
