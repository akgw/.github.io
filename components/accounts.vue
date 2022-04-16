<template>
  <v-row>
    <v-col>
      <div class="links">
        <a href="https://github.com/akgw">
          <v-icon class="mr-2 highlight--text">mdi-github</v-icon>
        </a>
        <a href="https://www.facebook.com/ryunosuke.akagawa">
          <v-icon class="mr-2 highlight--text">mdi-facebook</v-icon>
        </a>
        <a href="mailto:ryu.akagawa@gmail.com">
          <v-icon class="mr-2 highlight--text">mdi-gmail</v-icon>
        </a>
      </div>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
@Component
export default class Accounts extends Vue {
  @Prop({ required: true }) isSp: boolean
  className = 'text-left ma-6 list'

  created() {
    if (this.isSp) {
      this.className = 'mt-4 list'
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
    height: 60px !important;
    width: 60px !important;
    background-color: white;
  }
}

.links {
  & > a {
    text-decoration: none;
  }
}
</style>
