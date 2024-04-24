import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ContactView from '../views/ContactView.vue'

const router = createRouter({
  history: createWebHistory('https://aitsmena-test.netlify.app'),
  routes: [
    {
      path: '/', component: HomeView},
    { path: '/contact', component: ContactView },
  ]
})

export default router
