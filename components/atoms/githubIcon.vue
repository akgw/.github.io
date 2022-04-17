<template>
  <v-avatar :class="className">
    <v-img :src="`https://avatars.githubusercontent.com/u/${id}`" />
  </v-avatar>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
@Component
export default class GithubIcon extends Vue {
  @Prop({ required: true }) id: number
  @Prop({ required: false }) isSp: boolean
  className = 'size'
  $device: any

  created() {
    if (this.$device.isMobile) {
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
    height: 100px !important;
    width: 100px !important;
    background-color: white;
  }
}
</style>
