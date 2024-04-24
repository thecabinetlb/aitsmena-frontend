import './assets/css/index.css'

import { createApp } from 'vue'
import { createHead } from '@unhead/vue'
import App from './App.vue'
import router from './router'
import { MotionPlugin } from '@vueuse/motion'
import { VueRecaptchaPlugin } from 'vue-recaptcha/head'

const app = createApp(App)
const head = createHead()
app.use(head)
app.use(MotionPlugin)
app.use(router)
app.use(VueRecaptchaPlugin, {
  v2SiteKey: '6Ld4AMYpAAAAAEHy1RBcaHKU9T4bMG1OfQyRYajN',
})
app.mount('#app')
