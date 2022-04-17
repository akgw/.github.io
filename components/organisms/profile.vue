<template>
  <v-row>
    <v-col cols="6" align="right">
      <github-icon :id="2399657" />
    </v-col>
    <v-col cols="6">
      <list-item title="Name" :bodies="['Ryunosuke Akagawa', '赤川 龍之介']" />
      <list-item title="Date Birth" :bodies="['1988.08.16']" />
      <list-item title="From" :bodies="['Toyama']" />
      <list-item title="Live in" :bodies="['Tokyo']" />
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import githubIcon from '~/components/atoms/githubIcon.vue'
import listItem from '~/components/molecules/list-item.vue'
@Component({
  components: {
    githubIcon,
    listItem
  }
})
export default class Profile extends Vue {}
</script>
