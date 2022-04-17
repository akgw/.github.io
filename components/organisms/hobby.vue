<template>
  <v-row>
    <v-col cols="12">
      <div class="d-flex justify-space-around">
        <progress-circular :value="100" icon="mdi-controller-classic" />
        <progress-circular :value="100" icon="mdi-badminton" />
        <progress-circular :value="100" icon="mdi-campfire" />
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
export default class Hobby extends Vue {}
</script>
