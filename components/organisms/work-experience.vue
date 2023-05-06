<template>
  <v-row>
    <v-col>
      <v-timeline reverse dense>
        <timeline-item title="2013.04 ~ 2016.03" :bodies="['GREE, inc.', 'グリー株式会社']" />
        <timeline-item title="2016.04 ~ 2017.10" :bodies="['Hokuden Information System Service Company, Inc', '北電情報システムサービス株式会社']" />
        <timeline-item title="2017.11 ~ 2021.06" :bodies="['SMSC Co., Ltd.', '株式会社エス・エム・エスキャリア']" />
        <timeline-item title="2021.07 ~ " :bodies="['BuySell Technologies Co., Ltd.', '株式会社BuySell Technologies']" />
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
export default class WorkExperience extends Vue {}
</script>
