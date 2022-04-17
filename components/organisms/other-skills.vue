<template>
  <v-row>
    <v-col cols="12">
      <v-list color="background">
        <list-item-star title="Product Management" :num="3" />
        <list-item-star title="People Management" :num="4" />
        <list-item-star title="Engineer Recruiting" :num="2" />
        <list-item-star title="Tech Lead" :num="3" />
      </v-list>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import listItemStar from '~/components/molecules/list-item-star.vue'
@Component({
  components: {
    listItemStar
  }
})
export default class OtherSkills extends Vue {}
</script>
