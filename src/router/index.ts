import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import Histories from '../views/Histories.vue'
import Interests from '../views/Interests.vue'
import Qualifications from '../views/Qualifications.vue'
import SelfPR from '../views/SelfPR.vue'
import Skills from '../views/Skills.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/histories',
    name: 'Histories',
    component: Histories
  },
  {
    path: '/interests',
    name: 'Interests',
    component: Interests
  },
  {
    path: '/qualifications',
    name: 'Qualifications',
    component: Qualifications
  },
  {
    path: '/selfPR',
    name: 'SelfPR',
    component: SelfPR
  },
  {
    path: '/skills',
    name: 'Skills',
    component: Skills
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
