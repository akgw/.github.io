<template>
  <v-row>
    <v-col>
      <v-timeline reverse dense>
        <v-timeline-item color="teal lighten-3" small fill-dot>
          <v-list-item three-line>
            <v-list-item-content>
              <v-list-item-subtitle>2009.04 ~ 2011.03</v-list-item-subtitle>
              <v-list-item-title>
                National Institute of Technology
              </v-list-item-title>
              <v-list-item-title>
                富山高等専門学校 専攻科
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-timeline-item>
        <v-timeline-item color="teal lighten-3" small fill-dot>
          <v-list-item three-line>
            <v-list-item-content>
              <v-list-item-subtitle>2011.04 ~ 2013.03</v-list-item-subtitle>
              <v-list-item-title>
                Japan Advanced Institute of Science and Technology
              </v-list-item-title>
              <v-list-item-title>
                北陸先端科学技術大学院大学
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
export default class Profile extends Vue {
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
