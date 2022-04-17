<template>
  <v-row no-gutters>
    <v-col align="right" cols="6">
      <myphoto />
      <accounts class="mt-4" />

      <h2 class="mt-8 headline--text">Profile</h2>
      <profile />

      <h2 class="mt-4 headline--text">Education</h2>
      <education />

      <h2 class="mt-4 headline--text">Work Experience</h2>
      <workExperience />
    </v-col>
    <v-col cols="1" />

    <v-col cols="5">
      <h2 class="mt-4 headline--text">Skill</h2>
      <engineerSkills />

      <h2 class="mt-4 headline--text">Other Skill</h2>
      <otherSkills />

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
import { Component, Vue } from 'nuxt-property-decorator'
import myphoto from '~/components/organisms/myphoto.vue'
import accounts from '~/components/organisms/accounts.vue'
import profile from '~/components/organisms/profile.vue'
import education from '~/components/organisms/education.vue'
import workExperience from '~/components/organisms/work-experience.vue'
import engineerSkills from '~/components/organisms/engineer-skills.vue'
import otherSkills from '~/components/organisms/other-skills.vue'
import influenced from '~/components/organisms/influenced.vue'
import mind from '~/components/organisms/mind.vue'
import hobby from '~/components/organisms/hobby.vue'

@Component({
  components: {
    myphoto,
    accounts,
    profile,
    education,
    workExperience,
    engineerSkills,
    otherSkills,
    influenced,
    mind,
    hobby
  }
})
export default class TemplatesIndex extends Vue {}
</script>
