import Vue from 'vue'
import { wrapFunctional } from './index'

const components = {
  Accounts: () => import('../../components/accounts.vue' /* webpackChunkName: "components/accounts" */).then(c => wrapFunctional(c.default || c)),
  GithubIcon: () => import('../../components/githubIcon.vue' /* webpackChunkName: "components/github-icon" */).then(c => wrapFunctional(c.default || c)),
  GrassGraph: () => import('../../components/grassGraph.vue' /* webpackChunkName: "components/grass-graph" */).then(c => wrapFunctional(c.default || c)),
  Positions: () => import('../../components/positions.vue' /* webpackChunkName: "components/positions" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
