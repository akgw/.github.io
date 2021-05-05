<template>
  <v-row>
    <v-col :cols="isSp ? 12 : 6" class="text-center align-self-center">
      <p>Private</p>
      <img
        src="https://grass-graph.moshimo.works/images/akgw.png"
        width="100%"
      />
    </v-col>
    <v-col :cols="isSp ? 12 : 6" class="text-center align-self-center">
      <p>Business</p>
      <img
        src="https://grass-graph.moshimo.works/images/ryunosuke-akagawa-sms.png"
        width="100%"
      />
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
@Component
export default class grassGraph extends Vue {
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
