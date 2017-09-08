import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login'
Vue.use(Router)

const routes = [{
  path: '/',
  redirect: '/login'
}, {
  path: '/login',
  name: 'login',
  component: Login
}]

const router = new Router({
  mode: 'history',
  routes
})

export default router
