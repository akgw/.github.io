<template>
  <v-col cols="12" sm="12" md="12">
    <v-carousel v-model="model">
      <v-carousel-item v-for="page in pages" :key="page.title">
        <v-sheet :color="page.color" height="100%" tile>
          <v-row class="fill-height" align="center" justify="center">
            <div class="pa-8">
              <h2 v-if="page.title">{{ page.title }}</h2>
              <p v-html="page.description" />
              <div
                v-if="page.image"
                align="center"
                justify="center"
                class="mt-8"
              >
                <img
                  :src="page.image"
                  :height="isSp ? '150px' : '300px'"
                  class="image_size"
                />
              </div>
            </div>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
  </v-col>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

interface IPage {
  color: string
  title: string
  description: string
  image: string
}

@Component({
  asyncData(context: any) {
    return {
      isSp: context.$device.isMobile
    }
  }
})
export default class PagesPr extends Vue {
  model = 0

  pages: IPage[] = [
    {
      color: 'primary',
      title: 'What I Value',
      description: '',
      image: ''
    },
    {
      color: 'primary',
      title: 'Engineer + α',
      description: `エンジニアリングは問題解決のための道具。プロダクトにとって必要なスキルを身につけることが大切と考えています。<br />
      私は、<a style="color: black;font-weight: bold" href="https://techlog.voyagegroup.com/entry/2019/02/04/171325">フルサイクル開発者</a>としての働き方を目指しています。
      `,
      image: '/pr/fullcycle.png'
    },
    {
      color: 'primary',
      title: '(H)umility (R)espect (T)rust',
      description: `チームメンバーの意見を受け入れ、尊重することが大切と考えています。<br />
      私は、HRTを心がけるチームメンバーとしての働き方を目指しています。<a href="https://www.amazon.co.jp/Team-Geek-%E2%80%95Google%E3%81%AE%E3%82%AE%E3%83%BC%E3%82%AF%E3%81%9F%E3%81%A1%E3%81%AF%E3%81%84%E3%81%8B%E3%81%AB%E3%81%97%E3%81%A6%E3%83%81%E3%83%BC%E3%83%A0%E3%82%92%E4%BD%9C%E3%82%8B%E3%81%AE%E3%81%8B-Brian-Fitzpatrick/dp/4873116309/ref=sr_1_1?adgrpid=53102372557&dchild=1&gclid=Cj0KCQjw4cOEBhDMARIsAA3XDRhEaxm95Ft_EZsqT8fWE3Z6Q1o0lGZvfxaI6lo01oTXj9Ic9fSJ2pwaAlssEALw_wcB&hvadid=289221070453&hvdev=c&hvlocphy=1009309&hvnetw=g&hvqmt=e&hvrand=13532288330590472224&hvtargid=kwd-300500592869&hydadcr=27298_11414826&jp-ad-ap=0&keywords=team+geek&qid=1620122240&sr=8-1">参考</a>
      `,
      image: '/pr/teamgeek.jpeg'
    },
    {
      color: 'primary',
      title: 'Motivation Curve',
      description: `一人ひとりが生きる上で、モチベーション曲線を持っていると考えています。<br />
      プロとして最低限のバリューを出すことは当然ですが、より高みを望むときはモチベーションに合わせて話していきます。
      `,
      image: '/pr/motivation_curve.png'
    }
  ]
}
</script>
<style scoped>
.image_size {
  max-width: 100%;
  padding: 0 20px;
}
</style>
