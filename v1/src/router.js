import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/home/index'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/about/index')
    },
    {
      path: '/blog',
      name: 'blog',
      component: () => import('./views/blog/list/index')
    },
    {
      path: '/blog/:enTitle',
      name: 'post',
      component: () => import('./views/blog/post/index')
    },
    {
      path: '*',
      name: '404',
      component: () => import('./views/404/index')
    }
  ]
})
