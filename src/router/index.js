import { createRouter, createWebHistory } from 'vue-router'


import homePage from '../views/HomePage.vue'
import aboutPage from '../views/AboutPage.vue'
import inventory from '../views/InventoryPage.vue'

const routes = [
    {
      path: '/',
      name: 'home',
      component: homePage
    },
    {
      path: '/about',
      name: 'about',
      component: aboutPage
    },
    {
     path: '/items',
     name: 'inventory',
     component: inventory
    }
];

const router = createRouter({
  history: createWebHistory(),
  routes 
})

export default router
   