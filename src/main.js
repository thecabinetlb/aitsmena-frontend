import './assets/css/index.css'

import { ViteSSG } from 'vite-ssg'
import App from './App.vue'
import { createHead } from '@unhead/vue'
import { renderSSRHead } from '@unhead/ssr'

import routes from '~pages';
import { MotionPlugin } from '@vueuse/motion'
// import { VueRecaptchaPlugin } from 'vue-recaptcha/head'

// Create head instance for meta management
const head = createHead()
const payload = await renderSSRHead(head)

// `export const createApp` is required instead of the original `createApp(App).mount('#app')`
export const createApp = ViteSSG(
  // the root component
  App,
  // vue-router options
  { 
    routes, 
    scrollBehavior(to, from, savedPosition) {
      if (savedPosition) {
          return savedPosition
      } else if (to.hash) {
          return {
            el: to.hash,
            behavior: 'smooth',
        }
      }
      return { top: 0,  behavior: 'smooth' }
    }     
  },
  // function to have custom setups
  ({ app, router, routes, isClient, initialState }) => {
    console.log('App initialized');
    console.log('Routes:', routes);    

    // Install MotionPlugin for animations
    app.use(MotionPlugin)

    // Use @unhead/vue for meta management
    app.use(head)
    // Install VueReCaptcha plugin if running on client-side
    if (isClient) {
      // app.use(VueRecaptchaPlugin, {
      //   v2SiteKey: '6LdrDcYpAAAAAAKprMmCkM5ESKdgGcLAwmr016wl',
      // })
    }
    // Use vue-router
    app.use(router)
  }
)


// import { createApp } from 'vue'
// import { createHead } from '@unhead/vue'
// import App from './App.vue'
// import router from './router'
// import { MotionPlugin } from '@vueuse/motion'
// import { VueRecaptchaPlugin } from 'vue-recaptcha/head'

// const app = createApp(App)
// const head = createHead()
// app.use(head)
// app.use(MotionPlugin)
// app.use(router)
// app.use(VueRecaptchaPlugin, {
//   v2SiteKey: '6LdrDcYpAAAAAAKprMmCkM5ESKdgGcLAwmr016wl',
// })
// app.mount('#app')
