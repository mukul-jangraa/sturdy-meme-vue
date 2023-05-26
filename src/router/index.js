import {createRouter, createWebHistory} from 'vue-router'

import Home from '../views/Home.vue'

const routes = [
  {path: '/', name: 'Home', component: Home},
  {path: '/about', name: 'About', component: () => import('../views/About.vue')},
  {path: '/take-your-first-step-to-multiverse', name: 'Signup', component: () => import('../views/Signup.vue')},
  {path: '/continue-from-where-you-left', name: 'Login', component: () => import('../views/Login.vue')},
] 

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router