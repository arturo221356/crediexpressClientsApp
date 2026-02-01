// import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './assets/index.css'
import App from './App.vue'
import router from './router'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import { configureEcho } from '@laravel/echo-vue'
import axios from 'axios'
import { piniaCapacitorPersist } from 'pinia-plugin-capacitor-persist'

const app = createApp(App)

const pinia = createPinia()

pinia.use(piniaPluginPersistedstate)
pinia.use(piniaCapacitorPersist)

configureEcho({
  broadcaster: 'reverb',
  key: import.meta.env.VITE_REVERB_APP_KEY,
  wsHost: import.meta.env.VITE_REVERB_HOST,
  // wsPort: import.meta.env.VITE_REVERB_PORT,
  // enabledTransports: ['ws', 'wss'],
  enabledTransports: ['ws', 'wss'],

  authorizer: (channel, options) => {
    return {
      authorize: (socketId, callback) => {
        axios
          .post(
            'https://www.crediexpress.net/broadcasting/auth',
            {
              socket_id: socketId,
              channel_name: channel.name,
            },
            {
              headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-type': 'application/json',
              },
            },
          )
          .then((response) => {
            callback(false, response.data)
          })
          .catch((error) => {
            callback(true, error)
          })
      },
    }
  },
})

app.use(pinia)
app.use(router)

app.mount('#app')
