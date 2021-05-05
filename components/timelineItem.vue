<template>
  <v-row justify="space-between">
    <v-col class="text-left align-self-center" cols="2">{{ item.date }}</v-col>
    <v-col :cols="isSp ? 12 : 10" :class="isSp ? 'mt-2' : 'mt-4'">
      <h4
        :class="
          `${isSp ? 'Heading 5' : 'headline'} font-weight-light mb-4 teal--text`
        "
      >
        {{ item.title }}
      </h4>
      <h5 class="mb-5">~ {{ item.subtitle }} ~</h5>
      <div>
        <v-card
          v-for="event in item.events"
          :key="event.title"
          :class="isSp ? 'mb-2' : 'mb-10'"
        >
          <v-card-title class="text-h6">{{ event.title }}</v-card-title>

          <!-- eslint-disable-next-line vue/no-v-html -->
          <v-card-subtitle v-html="event.description" />
        </v-card>
      </div>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
import { ITimelineItem } from '~/pages/carrier.vue'
@Component
export default class TimelineItem extends Vue {
  @Prop({ required: true }) isSp: boolean
  @Prop({ required: true }) item: ITimelineItem

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
