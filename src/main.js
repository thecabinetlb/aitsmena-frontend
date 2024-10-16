import './assets/css/index.css'

import { ViteSSG } from 'vite-ssg'
import { createHead } from '@unhead/vue'

import App from './App.vue'

import routes from '~pages';
import { MotionPlugin } from '@vueuse/motion'
import { VueRecaptcha } from 'vue-recaptcha'
import VueAwesomePaginate from "vue-awesome-paginate"

// Import the plugin's styles
import "vue-awesome-paginate/dist/style.css"
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
    


    // Install VueReCaptcha plugin if running on client-side
    if (isClient) {
      // Register the plugin
      app.use(VueAwesomePaginate)
      
      app.component('vue-recaptcha', VueRecaptcha)
      // app.use(VueRecaptchaPlugin, {
      //   v2SiteKey: '6LdrDcYpAAAAAAKprMmCkM5ESKdgGcLAwmr016wl',
      // })
    }

    const head = createHead()

    app.use(head)
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
