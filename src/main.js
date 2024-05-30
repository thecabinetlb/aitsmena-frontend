import './assets/css/index.css'

import App from './App.vue'
import { createHead } from '@unhead/vue'
import {routes} from './router/index'
import { MotionPlugin } from '@vueuse/motion'
import { InferSeoMetaPlugin } from '@unhead/addons'
import { VueRecaptchaPlugin } from 'vue-recaptcha/head'
import { ViteSSG } from 'vite-ssg'

// Use the provided createApp function from vite-ssg
export const createApp = ViteSSG(
  // the root component
  App,
  // vue-router options
  { routes },
  // function to have custom setups
  ({ app, router, routes, isClient, initialState }) => {
    // Use @unhead/vue for meta management
    app.use(router)    
    const head = createHead()
    head.use(InferSeoMetaPlugin())
    app.use(head)
    if (isClient) {
        app.use(MotionPlugin)      
        app.use(VueRecaptchaPlugin, {
        v2SiteKey: '6LdrDcYpAAAAAAKprMmCkM5ESKdgGcLAwmr016wl',
      })    
    }
  }
)
