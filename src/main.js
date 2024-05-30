import './assets/css/index.css'

import { createSSRApp } from 'vue'
import { createHead } from '@unhead/vue'
import App from './App.vue'
import router from './router'
import { MotionPlugin } from '@vueuse/motion'
import { InferSeoMetaPlugin } from '@unhead/addons'

export const createApp = () => {
  /**
   * use createSSRApp to render the Vue App on the server
   * and send it to the user to do the hydration process
   */
  const app = createSSRApp(App);
  // Use @unhead/vue for meta management
  const head = createHead()
  head.use(InferSeoMetaPlugin())
  app.use(head)

  // Use other plugins
  app.use(MotionPlugin)
  app.use(router)

  return {
    app,
  };
};
