<template>
  <v-row>
    <v-col>
      <v-timeline reverse dense>
        <v-timeline-item color="teal lighten-3" small fill-dot>
          <v-list-item three-line>
            <v-list-item-content>
              <v-list-item-subtitle>2013.04 ~ 2016.03</v-list-item-subtitle>
              <v-list-item-title>
                GREE, inc.
              </v-list-item-title>
              <v-list-item-title>
                グリー株式会社
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-timeline-item>
        <v-timeline-item color="teal lighten-3" small fill-dot>
          <v-list-item three-line>
            <v-list-item-content>
              <v-list-item-subtitle>2016.04 ~ 2017.10</v-list-item-subtitle>
              <v-list-item-title>
                Hokuden Information System Service Company, Inc
              </v-list-item-title>
              <v-list-item-title>
                北電情報システムサービス株式会社
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-timeline-item>
        <v-timeline-item color="teal lighten-3" small fill-dot>
          <v-list-item three-line>
            <v-list-item-content>
              <v-list-item-subtitle>2017.11 ~ 2022.06</v-list-item-subtitle>
              <v-list-item-title>
                SMS Co., Ltd.
              </v-list-item-title>
              <v-list-item-title>
                株式会社エス・エム・エスキャリア
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-timeline-item>
        <v-timeline-item color="teal lighten-3" small fill-dot>
          <v-list-item three-line>
            <v-list-item-content>
              <v-list-item-subtitle>2022.07 ~ </v-list-item-subtitle>
              <v-list-item-title>
                BuySell Technologies Co., Ltd.
              </v-list-item-title>
              <v-list-item-title>
                株式会社BuySell Technologies
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-timeline-item>
      </v-timeline>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
@Component
export default class WorkExperience extends Vue {
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
