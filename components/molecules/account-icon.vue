<template>
  <a :href="href">
    <v-icon class="mr-2 highlight--text">{{ icon }}</v-icon>
  </a>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
@Component
export default class AccountIcon extends Vue {
  @Prop({ required: true }) href: string
  @Prop({ required: true }) icon: string
}
</script>
