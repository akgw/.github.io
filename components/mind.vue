<template>
  <v-row>
    <v-col cols="12">
      <v-list color="grey">
        <v-list-item>
          <v-list-item-content class="text-no-wrap">
            <v-list-item-title v-text="'1. to be generalist'"></v-list-item-title>
            <v-list-item-subtitle v-text="'Prioritize the knowledge required for the product.'" />
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content class="text-no-wrap">
            <v-list-item-title v-text="'2. keep mind HRT'"></v-list-item-title>
            <v-list-item-subtitle v-text="'(H)umility (R)espect (T)rust.'" />
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content class="text-no-wrap">
            <v-list-item-title v-text="'3. Motivation Curve'"></v-list-item-title>
            <v-list-item-subtitle v-text="'Conversation with the other engineer motivation.'" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
@Component
export default class OtherSkills extends Vue {
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
