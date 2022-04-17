<template>
  <v-row>
    <v-col cols="12">
      <photo path="/self.webp" />
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import photo from '~/components/atoms/photo.vue'
@Component({
  components: {
    photo
  }
})
export default class Myphoto extends Vue {}
</script>
