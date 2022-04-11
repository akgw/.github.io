<template>
  <v-row no-gutters>
    <v-col align="right" cols="5">
      <githubIcon id="2399657" :is-sp="isSp" />
      <accounts :is-sp="isSp" class="mt-4" />

      <h2 class="mt-4">Profile</h2>
      <profile />

      <h2 class="mt-4">Education</h2>
      <education />

      <h2 class="mt-4">Work Experience</h2>
      <work-experience />

      <!-- 
        <v-col cols="6" :class="className">
          <accounts :is-sp="isSp" />
        </v-col>
        <v-col :cols="isSp ? 6 : 4" class="text-left align-self-center">
          <positions :is-sp="isSp" />
        </v-col> -->
    </v-col>
    <v-col cols="2" />

    <v-col align="left" cols="5">
      <githubIcon id="2399657" :is-sp="isSp" />
    </v-col>
  </v-row>
  <!-- carrier -->
  <!-- <div v-if="isSp">
      <div v-for="(item, i) in list" :key="i" color="teal" small>
        <timelineItem :is-sp="isSp" :item="item" />
      </div>
    </div>
    <v-timeline v-else dense>
      <v-timeline-item v-for="(item, i) in list" :key="i" color="teal" small>
        <timelineItem :is-sp="isSp" :item="item" />
      </v-timeline-item>
    </v-timeline>

    <v-card-title>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search Name"
        single-line
        hide-details
      />
    </v-card-title> -->

  <!-- skill -->
  <!-- <v-data-table :headers="headers" :items="slist" :search="search">
      <template #[`item.name`]="{ item }" class="text-right align-self-center">
        <div class="text-center">
          <span class="pr-3">{{ item.name }}</span>
          <v-icon v-if="item.icon">{{ item.icon }}</v-icon>
        </div>
      </template>

      <template #[`item.level`]="{ item }">
        <v-icon v-for="i of item.level" :key="`yellow-${i}`" color="yellow"
          >mdi-star</v-icon
        >
        <v-icon v-for="i of 5 - item.level" :key="`white-${i}`" color="white"
          >mdi-star</v-icon
        >
      </template>

      <template #[`item.category`]="{ item }">
        <p :class="item.color">{{ item.category }}</p>
      </template>
    </v-data-table> -->

  <!-- pr -->
  <!-- <v-carousel v-model="model">
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
    </v-carousel> -->

  <!-- favorites -->
  <!-- <v-row>
      <v-col
        v-for="image in images"
        :key="imagePath(image)"
        class="d-flex child-flex"
        cols="4"
      >
        <v-hover v-slot="{ hover }">
          <v-img
            :src="imagePath(image)"
            aspect-ratio="1"
            class="grey lighten-2"
          >
            <v-expand-transition v-if="!isSp">
              <div
                v-if="hover"
                class="d-flex transition-fast-in-fast-out grey lighten-2 v-card--reveal black--text"
                style="height: 30%;"
              >
                <div>
                  <v-chip
                    class="ma-2"
                    :color="info(image).color"
                    label
                    text-color="white"
                  >
                    <v-icon left>{{ info(image).icon }}</v-icon>
                    {{ image.dirname }}
                  </v-chip>
                </div>
                <div class="ma-2">
                  {{ info(image).description }}
                </div>
              </div>
            </v-expand-transition>
          </v-img>
        </v-hover>
      </v-col>
    </v-row> -->
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import githubIcon from '~/components/githubIcon.vue'
import accounts from '~/components/accounts.vue'
import positions from '~/components/positions.vue'
import grassGraph from '~/components/grassGraph.vue'
const path = require('path')

export interface ITimelineItem {
  title: string
  subtitle: string
  date: string
  events: {
    title: string
    description: string
    image: string | null
  }[]
}

interface IHeader {
  text: string
  filterable: boolean
  sortable: boolean
  value: string
}

interface IPage {
  color: string
  title: string
  description: string
  image: string
}

interface IItem {
  name: string
  icon: string
  level: number
  category: string
  frameworks: string
  version: string
  color: string
  etc: string
}

interface IImage {
  dirname: string
  filepath: string
}

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
  search = ''

  list: ITimelineItem[] = [
    {
      title: '北陸先端科学技術大学院大学　入学',
      subtitle: 'グループウェアの研究と外部の発表に向けたシステム開発',
      date: '2011/04',
      events: [
        {
          title: 'グループウェアに関する研究',
          description: `
              会議参加者へリアルタイムに情報提供するシステムの開発と実験<br />
              <a href="https://ipsj.ixsq.nii.ac.jp/ej/?action=pages_view_main&active_action=repository_view_main_item_detail&item_id=88027&item_no=1&page_id=13&block_id=8">会議の場をリフレクションするリアルタイム会議支援システム「INGA」の提案と評価</a><br />
              XCodeでIOSアプリを開発
            `,
          image: null
        },
        {
          title: '咀嚼コミュニケーション：ポッキーゲーム',
          description: `
              <a href="http://ivrc.net/">IVRC</a>へのエントリー作品。ポッキーの咀嚼振動を通して「対面に誰かがいる」ような疑似体験するシステムを構築。<br />
              <a href="https://www.youtube.com/watch?v=2U0j7UH26_Y">一人でポッキーゲームができるシステム</a><br />
              Arduinoでシステムを開発
            `,
          image: null
        }
      ]
    },
    {
      title: 'グリー株式会社 入社',
      subtitle: 'WEBエンジニアとしての３年間',
      date: '2013/04',
      events: [
        {
          title: 'ソーシャルゲームの企画・開発・運用',
          description: `
              当時約2万DAUのソーシャルゲーム<a href="http://jp.apps.gree.net/ja/112">海賊王国コロンブス</a>に携わる。<br />
              オンプレのLAMP環境でWEBエンジニアとしての基礎を培う。<br />
              担当施策のデータ分析(KPIのbot通知システムの開発やユーザの動向調査)も経験した。
            `,
          image: null
        },
        {
          title: 'テックリードとしての役割',
          description: `
              ベトナムエンジニアとのオフショア開発も含めて約10名規模でのチーム開発を経験した。<br />
              定常業務で、サービス全体のコードレビュー、インフラとの連携を行った。<br />
              また、オンプレのサーバ削減としてN+1問題の解決や、キャッシュデータの見直し等行った。<br />
            `,
          image: null
        },
        {
          title: 'エンジニアマネージャとしての役割',
          description: `
              主に、定常施策での業務効率化や運用フローの改善業務を行った。<br />
              マネジメントらしいマネジメントは経験していない。
            `,
          image: null
        }
      ]
    },
    {
      title: '北電情報システムサービス株式会社 入社',
      subtitle: 'SAPのFIモジュール開発を経験',
      date: '2016/04',
      events: [
        {
          title: 'SAP導入企業様向けの運用改善・提案',
          description: `
              SAPのFIモジュール(経理)担当のエンジニアとして運用チームに参画<br />
              会計システムの知識をつけつつ、導入企業様向けに改善提案を実施。
            `,
          image: null
        },
        {
          title: 'SAP導入企業様向けの新規アドオン開発',
          description: `
              客先常駐で新規のFIモジュールのアドオン開発を経験<br />
              要件定義された内容をもとにコーディングのみ。
            `,
          image: null
        }
      ]
    },
    {
      title: '株式会社エス・エム・エスキャリア 入社',
      subtitle: 'システムリプレイスを経験',
      date: '2017/11',
      events: [
        {
          title: '看護師向けコミュニケーションサイトのリプレイス',
          description: `
              <a href="https://nurse-senka.jp/">看護学生向けコミュニケーションサイト</a>のリプレイスプロジェクトにエンジニアとして参画。<br />
              チームではマクロサービス開発を採用しており、小規模なアンケートサービスと生理日計算サービスの開発を行った。<br />
              リプレイス完了後も追加で新規サービス開発を行い、病院口コミサービスのリリースを行った。<br />
              チームメンバーは5名(Devops1名、サービス開発4名)で、各人が担当サービスを持ち相互に技術支援を行っていた。<br />
              チームではアジャイル開発方式を採用しており、2週間のスプリントで開発を行っていた。
            `,
          image: null
        },
        {
          title: '看護学生向け就職支援サイトのリプレイス',
          description: `
              <a href="https://recruit.nurse-senka.com/">看護学生向け就職支援サイト</a>のリプレイスプロジェクトにプロジェクトマネージャとして参画。<br />
              利用しているオンプレサーバの保守期限とOSのEOLの関係で、2段階に分けてリプレイスを実施。<br />
              <ul>
                <li>ver1.0 -> オンプレ → クラウド化(約半年)</li>
                <li>ver1.1 -> 言語・FMのバージョンアップ(約1年半)</li>
              </ul>
              開発は外部ベンダーへ委託し、その進行管理と受け入れテストを実施。<br />
              また、ver1.1時のAWSインフラ環境構築を担当した。<br />
              約2年かけたリプレイス実施後はRailsエンジニアとして開発業務を行っている。
            `,
          image: null
        }
      ]
    }
  ]

  headers: IHeader[] = [
    { text: 'Name', filterable: true, sortable: true, value: 'name' },
    {
      text: 'Frameworks',
      filterable: true,
      sortable: true,
      value: 'frameworks'
    },
    { text: 'Category', filterable: true, sortable: true, value: 'category' },
    { text: 'Level', filterable: false, sortable: true, value: 'level' },
    { text: 'Etc', filterable: false, sortable: false, value: 'etc' }
  ]

  slist: IItem[] = [
    {
      name: 'PHP',
      icon: 'mdi-language-php',
      level: 4,
      category: 'ServerSide',
      frameworks: 'Ethna, Laravel, WordPress',
      version: '5, 7',
      color: 'teal--text',
      etc: 'MAU2万のWEBサイト、システムリプレイス、業務委託としてHP制作'
    },
    {
      name: 'Ruby',
      icon: 'mdi-language-ruby-on-rails',
      level: 2,
      category: 'ServerSide',
      frameworks: 'Ruby on Rails',
      version: '2.6',
      color: 'teal--text',
      etc: 'WEBサイト運営'
    },
    {
      name: 'Python',
      icon: 'mdi-language-python',
      level: 2,
      category: 'ServerSide',
      frameworks: '-',
      version: '3',
      color: 'teal--text',
      etc: '趣味でスクレイピング'
    },
    {
      name: 'Go',
      icon: 'mdi-language-go',
      level: 1,
      category: 'ServerSide',
      frameworks: '-',
      version: '1.15',
      color: 'teal--text',
      etc: '趣味でスクレイピング'
    },
    {
      name: 'TypeScript',
      icon: 'mdi-vuejs',
      level: 3,
      category: 'Frontend',
      frameworks: 'Vue.js(Nuxt.js)',
      version: '2',
      color: 'lime--text',
      etc: 'SSR, SPAでのシステム開発'
    },
    {
      name: 'TypeScript',
      icon: 'mdi-react',
      level: 2,
      category: 'Frontend',
      frameworks: 'React.js(Next.js)',
      version: '16',
      color: 'lime--text',
      etc: 'SSR, SPAでのシステム開発'
    },
    {
      name: 'JavaScript',
      icon: 'mdi-angular',
      level: 2,
      category: 'Frontend',
      frameworks: 'Angular.js',
      version: '9',
      color: 'lime--text',
      etc: 'SPAの運用'
    },
    {
      name: 'JavaScript',
      icon: 'mdi-jquery',
      level: 1,
      category: 'Frontend',
      frameworks: 'jQuery',
      version: '3',
      color: 'lime--text',
      etc: 'コードレビューのみ'
    },
    {
      name: 'HTML',
      icon: 'mdi-language-html5',
      level: 3,
      category: 'Frontend',
      frameworks: '-',
      version: '5',
      color: 'lime--text',
      etc: '-'
    },
    {
      name: 'CSS',
      icon: 'mdi-language-css3',
      level: 2,
      category: 'Frontend',
      frameworks: 'element-js, bootstrap, vuetify',
      version: '-',
      color: 'lime--text',
      etc: 'フレームワークを用いて管理画面を装飾'
    },
    {
      name: 'Mysql',
      icon: 'mdi-database',
      level: 3,
      category: 'Database',
      frameworks: '-',
      version: '5',
      color: 'deep-orange--text',
      etc: '最低限のクエリチューニング可'
    },
    {
      name: 'Nginx',
      icon: 'mdi-web',
      level: 2,
      category: 'WebServer',
      frameworks: '-',
      version: '1',
      color: 'brown--text',
      etc: 'Dockerfile作成'
    },
    {
      name: 'Apache',
      icon: 'mdi-web',
      level: 2,
      category: 'WebServer',
      frameworks: '-',
      version: '2',
      color: 'brown--text',
      etc: '-'
    },
    {
      name: 'Terraform',
      icon: 'mdi-terraform',
      level: 2,
      category: 'Infrastracture As Code',
      frameworks: '-',
      version: '0.15',
      color: 'deep-purple--text',
      etc: 'システムリプレイス時に作成'
    },
    {
      name: 'PHPUnit',
      icon: 'mdi-ab-testing',
      level: 3,
      category: 'Unit Test',
      frameworks: '-',
      version: '6',
      color: 'cyan--text',
      etc: '-'
    },
    {
      name: 'RSpec',
      icon: 'mdi-ab-testing',
      level: 2,
      category: 'Unit Test',
      frameworks: '-',
      version: '3',
      color: 'cyan--text',
      etc: '-'
    },
    {
      name: 'Jest',
      icon: 'mdi-ab-testing',
      level: 3,
      category: 'Unit Test',
      frameworks: '-',
      version: '26',
      color: 'cyan--text',
      etc: '単体テストのみ'
    },
    {
      name: 'Nightwatch',
      icon: 'mdi-ab-testing',
      level: 3,
      category: 'E2E Test',
      frameworks: '-',
      version: '1.6',
      color: 'cyan--text',
      etc: '-'
    }
  ]

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

  images: IImage[] = [
    {
      dirname: 'badminton',
      filepath: '0001.JPG'
    },
    {
      dirname: 'badminton',
      filepath: '0002.JPG'
    },
    {
      dirname: 'badminton',
      filepath: '0003.gif'
    },
    {
      dirname: 'camp',
      filepath: '0001.JPG'
    },
    {
      dirname: 'camp',
      filepath: '0002.JPG'
    },
    {
      dirname: 'camp',
      filepath: '0003.JPG'
    },
    {
      dirname: 'camp',
      filepath: '0004.JPG'
    },
    {
      dirname: 'camp',
      filepath: '0005.JPG'
    },
    {
      dirname: 'camp',
      filepath: '0006.gif'
    },
    {
      dirname: 'monster_hunter',
      filepath: '0001.JPG'
    }
  ]

  infoList = [
    {
      dirname: 'badminton',
      description:
        'バドミントンは20年以上続けています。社会人サークルに所属し、練習や大会に参加しています。',
      icon: 'mdi-badminton',
      color: 'pink'
    },
    {
      dirname: 'camp',
      description:
        'ソロキャンプは2016年頃からしています。最近はコロナの影響で行けていません。',
      icon: 'mdi-campfire',
      color: 'cyan'
    },
    {
      dirname: 'monster_hunter',
      description:
        '有名所のゲームは大体やってますが、モンスターハンターが一番多くの時間を費やしました。',
      icon: 'mdi-food-drumstick-outline',
      color: 'green'
    }
  ]

  imagePath(image: IImage) {
    return path.join('/favorites', image.dirname, image.filepath)
  }

  info(image: IImage) {
    return this.infoList.find(info => info.dirname === image.dirname)
  }

  created() {
    if (this.isSp) {
      this.className = 'text-center align-self-center pa-2'
    }
  }
}
</script>
