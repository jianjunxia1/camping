import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SpotsView from '../views/SpotsView.vue'
import SpotDetailView from '../views/SpotDetailView.vue'
import GuidesView from '../views/GuidesView.vue'
import AboutView from '../views/AboutView.vue'
import DisclaimerView from '../views/DisclaimerView.vue'

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/spots', name: 'spots', component: SpotsView },
  { path: '/spots/:slug', name: 'spot-detail', component: SpotDetailView },
  { path: '/guides', name: 'guides', component: GuidesView },
  { path: '/about', name: 'about', component: AboutView },
  { path: '/disclaimer', name: 'disclaimer', component: DisclaimerView }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router
