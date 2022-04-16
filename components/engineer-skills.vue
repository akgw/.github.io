<template>
  <v-row>
    <v-col cols="10">
      <div class="d-flex justify-space-around">
        <v-progress-circular :rotate="-90" :size="80" :width="8" :value="90" color="secondary" class="ma-1">
          <v-icon large>mdi-laravel</v-icon>
        </v-progress-circular>

        <v-progress-circular :rotate="-90" :size="80" :width="8" :value="30" color="highlight" class="ma-1">
          <v-icon large>mdi-language-ruby-on-rails</v-icon>
        </v-progress-circular>

        <v-progress-circular :rotate="-90" :size="80" :width="8" :value="40" color="highlight" class="ma-1">
          <v-icon large>mdi-language-python</v-icon>
        </v-progress-circular>
      </div>

      <div class="d-flex justify-space-around">
        <v-progress-circular :rotate="-90" :size="80" :width="8" :value="60" color="highlight" class="ma-1">
          <v-icon large>mdi-language-go</v-icon>
        </v-progress-circular>
        <v-progress-circular :rotate="-90" :size="80" :width="8" :value="90" color="secondary" class="ma-1">
          <v-icon large>mdi-vuejs</v-icon>
        </v-progress-circular>
        <v-progress-circular :rotate="-90" :size="80" :width="8" :value="80" color="secondary" class="ma-1">
          <v-icon large>mdi-react</v-icon>
        </v-progress-circular>
      </div>

      <div class="d-flex justify-space-around">
        <v-progress-circular :rotate="-90" :size="80" :width="8" :value="80" color="secondary" class="ma-1">
          <v-icon large>mdi-terraform</v-icon>
        </v-progress-circular>
        <v-progress-circular :rotate="-90" :size="80" :width="8" :value="80" color="secondary" class="ma-1">
          <v-icon large>mdi-aws</v-icon>
        </v-progress-circular>
        <v-progress-circular :rotate="-90" :size="80" :width="8" :value="70" color="highlight" class="ma-1">
          <v-icon large>mdi-database</v-icon>
        </v-progress-circular>
      </div>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
@Component
export default class EngineerSkills extends Vue {
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
