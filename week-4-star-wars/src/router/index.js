import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: "/ship/:name",
    name: 'Ship',
    props: true,
    component: () => import(/* webpackChunkName: "ship-detail" */ '../views/ShipDetail.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
