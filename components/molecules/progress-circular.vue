<template>
  <v-progress-circular :rotate="-90" :size="80" :width="8" :value="value" :color="color()" class="ma-1">
    <v-icon large>{{ icon }}</v-icon>
  </v-progress-circular>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
@Component
export default class TimelineItem extends Vue {
  @Prop({ required: true }) icon: string
  @Prop({ required: true }) value: number

  color() {
    return this.value < 80 ? 'highlight' : 'secondary'
  }
}
</script>
