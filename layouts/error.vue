<template>
  <v-app dark>
    <h1>{{ error.statusCode }}</h1>
    <p>{{ error.message }}</p>
  </v-app>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'nuxt-property-decorator';

  @Component
  export default class LayoutsDefault extends Vue {
    @Prop({ required: false, default: () => null }) error: Object;
    otherError = 'An error occurred';
  }
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
