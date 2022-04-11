<template>
  <v-app :style="{ background: '#f5f5f5' }">
    <v-main>
      <v-container class="grey mt-16">
        <nuxt />
      </v-container>
    </v-main>

    <v-footer :absolute="true" app>
      <span>&copy; {{ new Date().getFullYear() }} ryunosuke akagawa</span>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class LayoutsDefault extends Vue {
  path = '/'

  handleClick(path: string) {
    this.$router.push(path)
  }
}
</script>
