import { createApp } from './main.js';
import { VueRecaptchaPlugin } from 'vue-recaptcha/head'

/**
 * initiate the Vue App for a client-side application
 */

const { app, router } = createApp()

// wait until router is ready before mounting to ensure hydration match
router.isReady().then(() => {
  app.use(VueRecaptchaPlugin, {
      v2SiteKey: '6LdrDcYpAAAAAAKprMmCkM5ESKdgGcLAwmr016wl',
    })  
  app.mount('#app')
})