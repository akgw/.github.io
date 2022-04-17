<template>
  <v-timeline-item color="highlight" small fill-dot>
    <v-list-item three-line>
      <v-list-item-content>
        <v-list-item-subtitle>{{ title }}</v-list-item-subtitle>
        <v-list-item-title v-for="body in bodies" :key="body">
          {{ body }}
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </v-timeline-item>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
@Component
export default class TimelineItem extends Vue {
  @Prop({ required: true }) title: string
  @Prop({ required: true }) bodies: string[]
}
</script>
