<template>
  <v-row>
    <v-col cols="12">
      <v-progress-circular :rotate="-90" :size="80" :width="8" :value="100" color="highlight" class="ma-1">
        <v-icon large>mdi-controller-classic</v-icon>
      </v-progress-circular>
      <v-progress-circular :rotate="-90" :size="80" :width="8" :value="100" color="highlight" class="ma-1">
        <v-icon large>mdi-badminton</v-icon>
      </v-progress-circular>
      <v-progress-circular :rotate="-90" :size="80" :width="8" :value="100" color="highlight" class="ma-1">
        <v-icon large>mdi-campfire</v-icon>
      </v-progress-circular>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
@Component
export default class Hobby extends Vue {
  @Prop({ required: true }) isSp: boolean
  className = 'size'

  created() {
    if (this.isSp) {
      this.className += '__sp'
    }
  }
}
</script>
<style lang="scss" scoped>
.size {
  margin-top: 20px;

  &__sp {
    margin-top: 12px;
  }
}
</style>
