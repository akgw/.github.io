export { default as Accounts } from '../../components/accounts.vue'
export { default as GithubIcon } from '../../components/githubIcon.vue'
export { default as GrassGraph } from '../../components/grassGraph.vue'
export { default as Positions } from '../../components/positions.vue'

export const LazyAccounts = import('../../components/accounts.vue' /* webpackChunkName: "components/accounts" */).then(c => wrapFunctional(c.default || c))
export const LazyGithubIcon = import('../../components/githubIcon.vue' /* webpackChunkName: "components/github-icon" */).then(c => wrapFunctional(c.default || c))
export const LazyGrassGraph = import('../../components/grassGraph.vue' /* webpackChunkName: "components/grass-graph" */).then(c => wrapFunctional(c.default || c))
export const LazyPositions = import('../../components/positions.vue' /* webpackChunkName: "components/positions" */).then(c => wrapFunctional(c.default || c))

// nuxt/nuxt.js#8607
export function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
