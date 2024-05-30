import { createApp } from './main.js';
import { VueRecaptchaPlugin } from 'vue-recaptcha/head'

/**
 * initiate the Vue App for a client-side application
 */
const { app } = createApp();
app.use(VueRecaptchaPlugin, {
    v2SiteKey: '6LdrDcYpAAAAAAKprMmCkM5ESKdgGcLAwmr016wl',
  })
app.mount('#app');