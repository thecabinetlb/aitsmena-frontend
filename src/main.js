import './assets/css/index.css'

import { createApp } from 'vue'
import { createHead } from '@unhead/vue'
import App from './App.vue'
import router from './router'
import { MotionPlugin } from '@vueuse/motion'
import { VueRecaptchaPlugin } from 'vue-recaptcha/head'
import VueMeta from 'vue-meta'

const app = createApp(App)
const head = createHead()
app.use(head)
Vue.use(VueMeta)
app.use(MotionPlugin)
app.use(router)
app.use(VueRecaptchaPlugin, {
  v2SiteKey: '6LdrDcYpAAAAAAKprMmCkM5ESKdgGcLAwmr016wl',
})
app.mount('#app')
