<template>
  <v-app dark>
    <v-bottom-navigation v-model="path" color="teal">
      <v-btn
        v-for="item in list"
        :key="item.path"
        :value="item.path"
        @click="handleClick(item.path)"
      >
        <span>{{ item.text }}</span>
        <v-icon>{{ item.icon }}</v-icon>
      </v-btn>
    </v-bottom-navigation>

    <v-main>
      <v-container>
        <v-row justify="center" align="center">
          <nuxt />
        </v-row>
      </v-container>
    </v-main>

    <v-footer :absolute="true" app>
      <span>&copy; {{ new Date().getFullYear() }} ryunosuke akagawa</span>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

interface IItem {
  path: string
  text: string
  icon: string
}
@Component
export default class LayoutsDefault extends Vue {
  path = '/'
  list: IItem[] = [
    {
      path: '/',
      text: 'Home',
      icon: 'mdi-home'
    },
    {
      path: '/carrier',
      text: 'Carrier',
      icon: 'mdi-history'
    },
    {
      path: '/skills',
      text: 'Skills',
      icon: 'mdi-human-male-height'
    },
    {
      path: '/pr',
      text: 'PR',
      icon: 'mdi-sprout-outline'
    },
    {
      path: '/favorites',
      text: 'Favorites',
      icon: 'mdi-heart'
    }
  ]

  handleClick(path: string) {
    this.$router.push(path)
  }
}
</script>
