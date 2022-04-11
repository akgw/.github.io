<template>
  <v-row>
    <v-col cols="12">
      <v-list-item three-line>
        <v-list-item-content>
          <v-list-item-subtitle>Name</v-list-item-subtitle>
          <v-list-item-title>
            Ryunosuke Akagawa
          </v-list-item-title>
          <v-list-item-title>
            赤川 龍之介
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list-item two-line>
        <v-list-item-content>
          <v-list-item-subtitle>Date Birth</v-list-item-subtitle>
          <v-list-item-title>
            1988.08.16
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list-item two-line>
        <v-list-item-content>
          <v-list-item-subtitle>From</v-list-item-subtitle>
          <v-list-item-title>
            Toyama
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list-item two-line>
        <v-list-item-content>
          <v-list-item-subtitle>Live in</v-list-item-subtitle>
          <v-list-item-title>
            Tokyo
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
@Component
export default class Profile extends Vue {
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
