import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/compradores',
    name: 'compradores',
    component: () => import('../views/Buyers.vue')
  },
  {
    path: '/proveedores',
    name: 'proveedores',
    component: () => import('../views/Providers.vue')
  },
  {
    path: '/dual',
    name: 'dual',
    component: () => import('../views/Dual.vue')
  },
  {
    path: '/tarifas',
    name: 'tarifas',
    component: () => import('../views/Tarifas.vue')
  },
  {
    path: '/porquehandelbay',
    name: 'porquehandelbay',
    component: () => import('../views/Porquehandelbay.vue')
  },
  {
    path: '/alianzas',
    name: 'alianzas',
    component: () => import('../views/Alianzas.vue')
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
