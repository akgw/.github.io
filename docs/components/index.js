export { default as Accounts } from '../../components/accounts.vue'
export { default as Education } from '../../components/education.vue'
export { default as EngineerSkills } from '../../components/engineer-skills.vue'
export { default as GithubIcon } from '../../components/githubIcon.vue'
export { default as Hobby } from '../../components/hobby.vue'
export { default as Images } from '../../components/images.vue'
export { default as Influenced } from '../../components/influenced.vue'
export { default as Mind } from '../../components/mind.vue'
export { default as OtherSkills } from '../../components/other-skills.vue'
export { default as Positions } from '../../components/positions.vue'
export { default as Profile } from '../../components/profile.vue'
export { default as TimelineItem } from '../../components/timelineItem.vue'
export { default as WorkExperience } from '../../components/work-experience.vue'

export const LazyAccounts = import('../../components/accounts.vue' /* webpackChunkName: "components/accounts" */).then(c => wrapFunctional(c.default || c))
export const LazyEducation = import('../../components/education.vue' /* webpackChunkName: "components/education" */).then(c => wrapFunctional(c.default || c))
export const LazyEngineerSkills = import('../../components/engineer-skills.vue' /* webpackChunkName: "components/engineer-skills" */).then(c => wrapFunctional(c.default || c))
export const LazyGithubIcon = import('../../components/githubIcon.vue' /* webpackChunkName: "components/github-icon" */).then(c => wrapFunctional(c.default || c))
export const LazyHobby = import('../../components/hobby.vue' /* webpackChunkName: "components/hobby" */).then(c => wrapFunctional(c.default || c))
export const LazyImages = import('../../components/images.vue' /* webpackChunkName: "components/images" */).then(c => wrapFunctional(c.default || c))
export const LazyInfluenced = import('../../components/influenced.vue' /* webpackChunkName: "components/influenced" */).then(c => wrapFunctional(c.default || c))
export const LazyMind = import('../../components/mind.vue' /* webpackChunkName: "components/mind" */).then(c => wrapFunctional(c.default || c))
export const LazyOtherSkills = import('../../components/other-skills.vue' /* webpackChunkName: "components/other-skills" */).then(c => wrapFunctional(c.default || c))
export const LazyPositions = import('../../components/positions.vue' /* webpackChunkName: "components/positions" */).then(c => wrapFunctional(c.default || c))
export const LazyProfile = import('../../components/profile.vue' /* webpackChunkName: "components/profile" */).then(c => wrapFunctional(c.default || c))
export const LazyTimelineItem = import('../../components/timelineItem.vue' /* webpackChunkName: "components/timeline-item" */).then(c => wrapFunctional(c.default || c))
export const LazyWorkExperience = import('../../components/work-experience.vue' /* webpackChunkName: "components/work-experience" */).then(c => wrapFunctional(c.default || c))

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
