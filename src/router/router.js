import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MarketView from '../views/MarketView.vue'
import AboutView from '../views/AboutView.vue'
import AdminView from '../views/admin/AdminView.vue'
import TableAdminView from '../views/admin/TableAdminView.vue'
import ChartAdminView from '../views/admin/ChartAdminView.vue'

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/market', name: 'Market', component: MarketView },
  { path: '/about', name: 'About', component: AboutView },
  { path: '/admin', name: 'Admin', component: AdminView },
  { path: '/table', name: 'Table', component: TableAdminView },
  { path: '/chart', name: 'Chart', component: ChartAdminView}
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router