<template>
  <v-row>
    <v-col cols="12">
      <v-list color="background">
        <list-item title="1. to be generalist" :bodies="['Prioritize the knowledge required for the product.']" />
        <list-item title="2. keep mind HRT" :bodies="['(H)umility (R)espect (T)rust.']" />
        <list-item title="3. motivation curve" :bodies="['Conversation with the other engineer motivation.']" />
      </v-list>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import listItem from '~/components/molecules/list-item.vue'

@Component({
  components: {
    listItem
  }
})
export default class Mind extends Vue {}
</script>
