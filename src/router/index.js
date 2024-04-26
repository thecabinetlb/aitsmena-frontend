import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ContactView from '../views/ContactView.vue'
import AboutView from '../views/AboutView.vue'
import IndustriesView from '../views/Industries/IndustriesView.vue'
import CareersView from '../views/CareersView.vue'
import ResourcesView from '../views/Resources/ResourcesView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: HomeView},
    { path: '/about', component: AboutView },
    { path: '/contact', component: ContactView },
    { path: '/industries', component: IndustriesView },
    { path: '/careers', component: CareersView },
    { path: '/resources', component: ResourcesView },
  ]
})

export default router
