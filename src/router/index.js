import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/products',
    name: 'products',
    component: () => import('../views/ProductsView.vue')
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import('../views/CartView.vue')
  },
  {
    path: '/adminLogin',
    name: 'AdminLogin',
    component: () => import('../views/AdminLogin.vue')
  },
  {
    path: '/admin',
    name: 'AdminView',
    component: () => import('../views/admin/AdminView.vue'),
    children: [{
      path: 'products',
      name: 'AdminProducts',
      component: () => import('../views/admin/AdminProducts.vue')
    }, {
      path: 'orders',
      name: 'AdminOrders',
      component: () => import('../views/admin/AdminOrders.vue')
    }]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
