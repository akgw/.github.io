<template>
  <v-row>
    <v-col cols="12">
      <div class="d-flex justify-space-around">
        <progress-circular :value="90" icon="mdi-laravel" />
        <progress-circular :value="30" icon="mdi-language-ruby-on-rails" />
        <progress-circular :value="40" icon="mdi-language-python" />
      </div>

      <div class="d-flex justify-space-around">
        <progress-circular :value="60" icon="mdi-language-go" />
        <progress-circular :value="90" icon="mdi-vuejs" />
        <progress-circular :value="80" icon="mdi-react" />
      </div>

      <div class="d-flex justify-space-around">
        <progress-circular :value="80" icon="mdi-terraform" />
        <progress-circular :value="80" icon="mdi-aws" />
        <progress-circular :value="70" icon="mdi-database" />
      </div>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import progressCircular from '~/components/molecules/progress-circular.vue'
@Component({
  components: {
    progressCircular
  }
})
export default class EngineerSkills extends Vue {}
</script>
