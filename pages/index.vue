<template>
  <v-col cols="12" sm="12" md="12">
    <v-row>
      <v-col cols="6" class="text-center align-self-center pa-12">
        <v-avatar height="200px" width="200px" color="white">
          <img src="https://avatars.githubusercontent.com/u/2399657" />
        </v-avatar>
        <v-row>
          <v-col cols="2" />
          <v-col cols="10" class="text-left ma-6 list">
            <div>
              <v-icon class="mr-2">mdi-github</v-icon
              ><a href="https://github.com/akgw">https://github.com/akgw</a>
            </div>
            <div>
              <v-icon class="mr-2">mdi-facebook</v-icon
              ><a href=">https://www.facebook.com/ryunosuke.akagawa"
                >https://www.facebook.com/ryunosuke.akagawa</a
              >
            </div>
            <div>
              <v-icon class="mr-2">mdi-gmail</v-icon
              ><a href="mailto:ryu.akagawa@gmail.com">ryu.akagawa@gmail.com</a>
            </div>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="6" class="text-left align-self-center">
        <v-row>
          <v-col cols="2"></v-col>
          <v-col cols="10">
            <h4>
              Ryunosuke Akagawa
            </h4>
            <h2>
              赤川 龍之介
            </h2>
            <hr />
            <div class="positions">
              <ul>
                <li>Engineer</li>
                <li>Tech Lead</li>
                <li>Engineer Manager</li>
                <li>Project Manager</li>
              </ul>
            </div>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="6" class="text-center align-self-center">
        <p>Private</p>
        <img
          src="https://grass-graph.moshimo.works/images/akgw.png"
          width="100%"
        />
      </v-col>
      <v-col cols="6" class="text-center align-self-center">
        <p>Business</p>
        <img
          src="https://grass-graph.moshimo.works/images/ryunosuke-akagawa-sms.png"
          width="100%"
        />
      </v-col>
    </v-row>

    <!-- <h3 class="text-center align-self-center mt-12 mb-12">Life Events</h3>
    <v-row>
      <v-col cols="12">
        <v-sheet
          class="v-sheet--offset mx-auto"
          color="black"
          elevation="12"
          max-width="calc(100% - 32px)"
        >
          <v-sparkline
            :labels="labels"
            :value="value"
            :gradient="['#f72047', '#ffd200', '#1feaea']"
            line-width="2"
            padding="16"
          ></v-sparkline>
        </v-sheet>
      </v-col>
    </v-row> -->
  </v-col>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
@Component
export default class PagesIndex extends Vue {
  labels = ['12am', '3am', '6am', '9am', '12pm', '3pm', '6pm', '9pm']

  value = [200, 675, 410, 390, 310, 460, 250, 240]
}
</script>
<style scoped>
.list > div {
  margin-top: 12px;
}
.positions {
  margin-top: 20px;
}
</style>
