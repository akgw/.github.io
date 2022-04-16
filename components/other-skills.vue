<template>
  <v-row>
    <v-col cols="12">
      <v-list color="grey">
        <v-list-item>
          <v-list-item-title>Product Management</v-list-item-title>
          <v-list-item-subtitle>
            <v-icon v-for="i of 3" :key="`yellow-${i}`" color="yellow lighten-3">
              mdi-star
            </v-icon>
            <v-icon v-for="i of 5 - 3" :key="`white-${i}`" color="white">
              mdi-star
            </v-icon>
          </v-list-item-subtitle>
        </v-list-item>
        <v-list-item>
          <v-list-item-title>People Management</v-list-item-title>
          <v-list-item-subtitle>
            <v-icon v-for="i of 4" :key="`yellow-${i}`" color="yellow lighten-3">
              mdi-star
            </v-icon>
            <v-icon v-for="i of 5 - 4" :key="`white-${i}`" color="white">
              mdi-star
            </v-icon>
          </v-list-item-subtitle>
        </v-list-item>
        <v-list-item>
          <v-list-item-title>Engineer Recruiting</v-list-item-title>
          <v-list-item-subtitle>
            <v-icon v-for="i of 2" :key="`yellow-${i}`" color="yellow lighten-3">
              mdi-star
            </v-icon>
            <v-icon v-for="i of 5 - 2" :key="`white-${i}`" color="white">
              mdi-star
            </v-icon>
          </v-list-item-subtitle>
        </v-list-item>
        <v-list-item>
          <v-list-item-title>Tech Lead</v-list-item-title>
          <v-list-item-subtitle>
            <v-icon v-for="i of 2" :key="`yellow-${i}`" color="yellow lighten-3">
              mdi-star
            </v-icon>
            <v-icon v-for="i of 5 - 2" :key="`white-${i}`" color="white">
              mdi-star
            </v-icon>
          </v-list-item-subtitle>
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
