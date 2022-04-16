<template>
  <v-app :style="{ background: '#f8f5f2' }">
    <v-main>
      <v-container class="#f8f5f2 mt-16 mb-16 buttonText--text">
        <nuxt />
      </v-container>
    </v-main>

    <v-footer :absolute="true" app class="secondary">
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
<style lang="scss">
.v-progress-circular__underlay {
  stroke: #222525;
}
</style>
