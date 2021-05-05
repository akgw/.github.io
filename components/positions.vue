<template>
  <v-row>
    <v-col cols="12">
      <h4>
        Ryunosuke Akagawa
      </h4>
      <h2>
        赤川 龍之介
      </h2>
      <hr />
      <div :class="className">
        <ul>
          <li>Engineer</li>
          <li>Tech Lead</li>
          <li>Engineer Manager</li>
          <li>Project Manager</li>
        </ul>
      </div>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
@Component
export default class Positions extends Vue {
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
