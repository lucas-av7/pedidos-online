import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Order from '../views/Order.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/order',
    name: 'Order',
    component: Order,
    props: true
  },
  
]

const router = new VueRouter({
  routes,
  scrollBehavior () {
    return { x: 0, y: 0 };
  }
})

export default router