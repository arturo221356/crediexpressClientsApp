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
  key: import.meta.env.VITE_REVERB_APP_KEY,
  wsHost: import.meta.env.VITE_REVERB_HOST,
  // wsPort: import.meta.env.VITE_REVERB_PORT,
  // enabledTransports: ['ws', 'wss'],
  authorizer: (channel) => {
    return {
      authorize: async (socketId, callback) => {
        try {
          const response = await fetch('https://www.crediexpress.net/broadcasting/auth', {
            method: 'POST',
            credentials: 'include', // ← Envía cookies de sesión
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              socket_id: socketId,
              channel_name: channel.name,
            }),
          })

          if (!response.ok) {
            const errorText = await response.text()
            throw new Error(`Auth failed: ${response.status} - ${errorText}`)
          }

          const data = await response.json()
          callback(null, data)
        } catch (error) {
          console.error('Broadcasting auth error:', error)
          callback(error, null)
        }
      },
    }
  },
})

app.use(pinia)
app.use(router)

app.mount('#app')
