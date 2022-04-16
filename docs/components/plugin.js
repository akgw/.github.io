import Vue from 'vue'
import { wrapFunctional } from './index'

const components = {
  Accounts: () => import('../../components/accounts.vue' /* webpackChunkName: "components/accounts" */).then(c => wrapFunctional(c.default || c)),
  Education: () => import('../../components/education.vue' /* webpackChunkName: "components/education" */).then(c => wrapFunctional(c.default || c)),
  EngineerSkills: () => import('../../components/engineer-skills.vue' /* webpackChunkName: "components/engineer-skills" */).then(c => wrapFunctional(c.default || c)),
  GithubIcon: () => import('../../components/githubIcon.vue' /* webpackChunkName: "components/github-icon" */).then(c => wrapFunctional(c.default || c)),
  Hobby: () => import('../../components/hobby.vue' /* webpackChunkName: "components/hobby" */).then(c => wrapFunctional(c.default || c)),
  Images: () => import('../../components/images.vue' /* webpackChunkName: "components/images" */).then(c => wrapFunctional(c.default || c)),
  Influenced: () => import('../../components/influenced.vue' /* webpackChunkName: "components/influenced" */).then(c => wrapFunctional(c.default || c)),
  Mind: () => import('../../components/mind.vue' /* webpackChunkName: "components/mind" */).then(c => wrapFunctional(c.default || c)),
  OtherSkills: () => import('../../components/other-skills.vue' /* webpackChunkName: "components/other-skills" */).then(c => wrapFunctional(c.default || c)),
  Positions: () => import('../../components/positions.vue' /* webpackChunkName: "components/positions" */).then(c => wrapFunctional(c.default || c)),
  Profile: () => import('../../components/profile.vue' /* webpackChunkName: "components/profile" */).then(c => wrapFunctional(c.default || c)),
  TimelineItem: () => import('../../components/timelineItem.vue' /* webpackChunkName: "components/timeline-item" */).then(c => wrapFunctional(c.default || c)),
  WorkExperience: () => import('../../components/work-experience.vue' /* webpackChunkName: "components/work-experience" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
