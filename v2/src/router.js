import { createRouter, createWebHistory } from 'vue-router'

import Home from './views/home/index.vue'

export default createRouter({
  history: createWebHistory('/site/'),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: () => import('./views/about/index.vue')
    },
    {
      path: '/blog',
      name: 'Blog',
      component: () => import('./views/blog/list/index.vue')
    },
    {
      path: '/blog/:enTitle',
      name: 'Post',
      component: () => import('./views/blog/post/index.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('./views/404/index.vue')
    }
  ]
})