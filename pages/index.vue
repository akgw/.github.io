<template>
  <v-col cols="12" sm="12" md="12">
    <v-row>
      <v-col cols="6" :class="className">
        <githubIcon id="2399657" :is-sp="isSp" />
        <accounts :is-sp="isSp" />
      </v-col>
      <v-col :cols="isSp ? 6 : 4" class="text-left align-self-center">
        <positions :is-sp="isSp" />
      </v-col>
    </v-row>
    <grassGraph :is-sp="isSp" />
  </v-col>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import githubIcon from '~/components/githubIcon.vue'
import accounts from '~/components/accounts.vue'
import positions from '~/components/positions.vue'
import grassGraph from '~/components/grassGraph.vue'

@Component({
  components: {
    githubIcon,
    accounts,
    positions,
    grassGraph
  },
  asyncData(context: any) {
    return {
      isSp: context.$device.isMobile
    }
  }
})
export default class PagesIndex extends Vue {
  className = 'text-center align-self-center pa-12'
  isSp = false

  created() {
    if (this.isSp) {
      this.className = 'text-center align-self-center pa-2'
    }
  }
}
</script>
