import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _625c4f70 = () => interopDefault(import('../pages/carrier.vue' /* webpackChunkName: "pages/carrier" */))
const _4145ce27 = () => interopDefault(import('../pages/favorites.vue' /* webpackChunkName: "pages/favorites" */))
const _6c4a99e2 = () => interopDefault(import('../pages/pr.vue' /* webpackChunkName: "pages/pr" */))
const _502b8822 = () => interopDefault(import('../pages/skills.vue' /* webpackChunkName: "pages/skills" */))
const _5ba6f322 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/carrier",
    component: _625c4f70,
    name: "carrier"
  }, {
    path: "/favorites",
    component: _4145ce27,
    name: "favorites"
  }, {
    path: "/pr",
    component: _6c4a99e2,
    name: "pr"
  }, {
    path: "/skills",
    component: _502b8822,
    name: "skills"
  }, {
    path: "/",
    component: _5ba6f322,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
