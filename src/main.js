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
  v2SiteKey: '6LdrDcYpAAAAAAKprMmCkM5ESKdgGcLAwmr016wl',
})
app.mount('#app')
// import { ViteSSG } from 'vite-ssg'
// import App from './App.vue'
// import { createHead } from '@unhead/vue'
// import { routes } from './router'

// import { MotionPlugin } from '@vueuse/motion'
// // import { VueRecaptchaPlugin } from 'vue-recaptcha/head'

// // `export const createApp` is required instead of the original `createApp(App).mount('#app')`
// export const createApp = ViteSSG(
//   // the root component
//   App,
//   // vue-router options
//   { routes },
//   // function to have custom setups
//   ({ app, router, routes, isClient, initialState }) => {
//     // install plugins etc.
//     app.use(MotionPlugin)
//     app.use(router)
//     // Use @unhead/vue for meta management
//     const head = createHead()
//     app.use(head)
//     // app.use(VueRecaptchaPlugin, {
//     //   v2SiteKey: '6LdrDcYpAAAAAAKprMmCkM5ESKdgGcLAwmr016wl',
//     // })  
//   },
// )