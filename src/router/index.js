
//import Home from '../views/Home.vue'
//import About from '../views/About.vue'
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: '',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/whether',
    name: 'whether',
    component: () => import('../views/RootWeatherComponent.vue')
  },
  {
    path: '/projects',
    name: 'projects',
    component: () => import('../views/Projects.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/Contact.vue')
  },
  {
    path: '/services',
    name: 'services',
    component: () => import('../views/Services.vue')
  }
]

const router = new VueRouter({
mode: 'history',
  base: process.env.BASE_URL,
  routes
})









export default router
