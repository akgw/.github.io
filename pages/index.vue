<template>
  <v-row no-gutters>
    <v-col align="right" cols="6">
      <images id="2399657" />
      <accounts class="mt-4" />

      <h2 class="mt-8 headline--text">Profile</h2>
      <profile />

      <h2 class="mt-4 headline--text">Education</h2>
      <education />

      <h2 class="mt-4 headline--text">Work Experience</h2>
      <work-experience />
    </v-col>
    <v-col cols="1" />

    <v-col cols="5">
      <h2 class="mt-4 headline--text">Skill</h2>
      <engineer-skills />

      <h2 class="mt-4 headline--text">Other Skill</h2>
      <other-skills />

      <h2 class="mt-4 headline--text">Influenced</h2>
      <influenced />

      <h2 class="mt-4 headline--text">Mind</h2>
      <mind />

      <h2 class="mt-4 headline--text">Hobby</h2>
      <hobby />
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Vue } from 'nuxt-property-decorator'
export default class PagesIndex extends Vue {
  isSp = false
}
</script>
