<template>
  <v-img :src="path" />
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
@Component
export default class Photo extends Vue {
  @Prop({ required: true }) path: string
}
</script>
