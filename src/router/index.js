import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import InventoryPage from '../views/InventoryPage.vue'
import AboutPage from '../views/AboutPage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/items',
    name: 'Inventory',
    component: InventoryPage
  },
  {
    path: '/about',
    name: 'About',
    component: AboutPage
  }
]

export default createRouter({
  history: createWebHistory(),
  routes
})
