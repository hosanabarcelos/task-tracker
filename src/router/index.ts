import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import AppView from '../App.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: AppView
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
