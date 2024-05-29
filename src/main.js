import './assets/css/index.css'

import { createApp } from 'vue'
import { createHead } from '@unhead/vue'
import App from './App.vue'
import router from './router'
import { MotionPlugin } from '@vueuse/motion'
import { VueRecaptchaPlugin } from 'vue-recaptcha/head'
import { renderSSRHead } from '@unhead/ssr'


const app = createApp(App)

// Use @unhead/vue for meta management
const head = createHead()
// if you need access to it you can also use getActiveHead()
const payload = await renderSSRHead(head)
app.use(payload)

// Use other plugins
app.use(MotionPlugin)
app.use(router)
app.use(VueRecaptchaPlugin, {
  v2SiteKey: '6LdrDcYpAAAAAAKprMmCkM5ESKdgGcLAwmr016wl',
})

// Mount the app
app.mount('#app')
