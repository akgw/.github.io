<template>
  <v-list-item>
    <v-list-item-title>{{ title }} </v-list-item-title>
    <v-list-item-title>
      <v-icon v-for="i of num" :key="`yellow-${i}`" :color="color">
        mdi-star
      </v-icon>
      <v-icon v-for="i of 5 - num" :key="`white-${i}`" color="stroke">
        mdi-star
      </v-icon>
    </v-list-item-title>
  </v-list-item>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
@Component
export default class ListItem extends Vue {
  @Prop({ required: true }) title: string
  @Prop({ required: true }) num: number

  color = 'highlight'
  created() {
    if (this.num > 3) {
      this.color = 'secondary'
    }
  }
}
</script>
