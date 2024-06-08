import './assets/css/index.css'

import { ViteSSG } from 'vite-ssg'
import { createHead } from '@unhead/vue'

import App from './App.vue'

import routes from '~pages';
import { MotionPlugin } from '@vueuse/motion'
// import { VueRecaptchaPlugin } from 'vue-recaptcha/head'

// Create head instance for meta management
const head = createHead()

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
    

    // payload.push({
    //   meta: [
    //     {
    //       property: 'og:title',
    //       content: 'AITS - Industrial Software Solutions And Digital Services Tailored To Your Business'
    //     },
    //     {
    //       property: 'og:image',
    //       content: 'https://aitsmena-test.netlify.app/aits-open-graph_v1.jpg',
    //     },
    //     {
    //       property: 'og:description',
    //       content: " AITS transforms businesses like yours through innovative tech solutions tailored to your unique needs. Book your free consultation call to get started!",
    //     },
    //     {
    //       property: 'og:url',
    //       content: 'ogUrl',
    //     },
    //   ],   
    // })
    // Install MotionPlugin for animations
    app.use(MotionPlugin)

    // Install VueReCaptcha plugin if running on client-side
    if (isClient) {
      // app.use(VueRecaptchaPlugin, {
      //   v2SiteKey: '6LdrDcYpAAAAAAKprMmCkM5ESKdgGcLAwmr016wl',
      // })
    }
    // Use @unhead/ssr for meta management
    app.use(head)    
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
