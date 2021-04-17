<template>
  <v-col cols="12" sm="12" md="12">
    <v-timeline dense>
      <v-timeline-item v-for="(item, i) in list" :key="i" color="teal" small>
        <v-row justify="space-between">
          <v-col class="text-left align-self-center" cols="2">
            {{ item.date }}
          </v-col>
          <v-col cols="10" class="mt-10">
            <h2 :class="`headline font-weight-light mb-4 teal--text`">
              {{ item.title }}
            </h2>
            <h5 class="mb-5">
              ~ {{item.subtitle}} ~
            </h5>
            <div>
              <v-card v-for="event in item.events" :key="event.title" class="mb-10">
                <v-card-title class="text-h6">
                  {{ event.title }}
                </v-card-title>

                <v-card-subtitle v-html="event.description" />

                <v-avatar class="ma-3" size="125" tile v-if="event.image">
                  <v-img src="https://cdn.vuetifyjs.com/images/cards/foster.jpg"></v-img>
                </v-avatar>
              </v-card>
            </div>            
          </v-col>
        </v-row>
      </v-timeline-item>
    </v-timeline>
  </v-col>
</template>

<script lang="ts">
  import { Component, Vue } from 'nuxt-property-decorator';

  interface IList {
    title: string
    subtitle: string
    date: string
    events: {
      title: string
      description: string
      image: string | null;
    }[],
  }

  @Component
  export default class PagesCarrier extends Vue {
    list: IList[] = [
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
            image: null,
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
  }
</script>
