import { createApp } from './main.js';

/**
 * initiate the Vue App for a client-side application
 */

const { app, router } = createApp()

// wait until router is ready before mounting to ensure hydration match
router.isReady().then(() => {
  app.mount('#app')
})