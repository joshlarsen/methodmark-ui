import { createWebHistory, createRouter } from 'vue-router'

// import Dashboard from '@/views/DashboardMain.vue'
import Domain from '@/views/DomainGet.vue'
import Domains from '@/views/DomainList.vue'
import Settings from '@/views/SettingsMain.vue'

const routes = [
  { path: '/', component: Domains },
  { path: '/domains', component: Domains },
  { path: '/domains/:id', component: Domain },
  { path: '/settings', component: Settings },
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
})

export { router }