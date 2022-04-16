<template>
  <v-row>
    <v-col cols="12">
      <v-img src="/self.webp" />
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
@Component
export default class Images extends Vue {
  @Prop({ required: true }) id: number
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
  height: 200px !important;
  width: 200px !important;
  background-color: white;

  &__sp {
    height: 50px !important;
    width: 50px !important;
    background-color: white;
  }
}
</style>
