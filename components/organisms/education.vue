<template>
  <v-row>
    <v-col>
      <v-timeline reverse dense>
        <timeline-item title="2009.04 ~ 2011.03" :bodies="['National Institute of Technology', '富山高等専門学校 専攻科']" />
        <timeline-item title="2011.04 ~ 2013.03" :bodies="['Japan Advanced Institute of Science and Technology', '北陸先端科学技術大学院大学']" />
      </v-timeline>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import timelineItem from '~/components/molecules/timeline-item.vue'
@Component({
  components: {
    timelineItem
  }
})
export default class Education extends Vue {}
</script>
