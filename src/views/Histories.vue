<template>
  <div class="about">
    <h1>学歴・職務経歴</h1>
    <Timeline :value="list" align="alternate">
      <template #opposite="slotProps">
        <small class="p-text-secondary">{{ slotProps.item.date }}</small>
      </template>
      <template #content="slotProps">
        <Card>
          <template #title>
            {{ slotProps.item.title }}
          </template>
          <template #subtitle>
            {{ slotProps.item.subtitle }}
          </template>
          <template #content v-if="slotProps.item.events">
            <Accordion
              v-for="event in slotProps.item.events"
              :key="event.title"
              :activeIndex="0"
            >
              <AccordionTab :header="event.title">
                <div v-html="event.description"></div>
              </AccordionTab>
            </Accordion>
          </template>
        </Card>
      </template>
    </Timeline>
  </div>
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import Timeline from 'primevue/timeline'
import Card from 'primevue/card'
import Accordion from 'primevue/accordion'
import AccordionTab from 'primevue/accordiontab'
import dayjs from 'dayjs'

interface List {
  title: string
  subtitle: string
  date: string
  events: {
    title: string
    description: string
  }[]
}

export default defineComponent({
  components: {
    Timeline,
    Card,
    Accordion,
    AccordionTab
  },
  setup() {
    // methods
    const redirect = (url: string): void => {
      console.log(url)
      if (!url) {
        return
      }
      window.open(url, '_blank')
    }

    // url: 'https://www.jaist.ac.jp/index.html',
    const list: List[] = [
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
            `
          },
          {
            title: '咀嚼コミュニケーション：ポッキーゲーム',
            description: `
              <a href="http://ivrc.net/">IVRC</a>へのエントリー作品。ポッキーの咀嚼振動を通して「対面に誰かがいる」ような疑似体験するシステムを構築。<br />
              <a href="https://www.youtube.com/watch?v=2U0j7UH26_Y">一人でポッキーゲームができるシステム</a><br />
              Arduinoでシステムを開発
            `
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
            `
          },
          {
            title: 'テックリードとしての役割',
            description: `
              ベトナムエンジニアとのオフショア開発も含めて約10名規模でのチーム開発を経験した。<br />
              定常業務で、サービス全体のコードレビュー、インフラとの連携を行った。<br />
              また、オンプレのサーバ削減としてN+1問題の解決や、キャッシュデータの見直し等行った。<br />
            `
          },
          {
            title: 'エンジニアマネージャとしての役割',
            description: `
              主に、定常施策での業務効率化や運用フローの改善業務を行った。<br />
              マネジメントらしいマネジメントは経験していない。
            `
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
            `
          },
          {
            title: 'SAP導入企業様向けの新規アドオン開発',
            description: `
              客先常駐で新規のFIモジュールのアドオン開発を経験<br />
              要件定義された内容をもとにコーディングのみ。
            `
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
            `
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
            `
          }
        ]
      },
      {
        title: '現在に至る',
        subtitle: '',
        date: dayjs().format('YYYY/MM'),
        events: []
      }
    ]

    return {
      redirect,
      list
    }
  }
})
</script>
<style lang="scss" scoped>
::v-deep(.p-card .p-card-content) {
  padding: 0;
}

::v-deep(.p-card) {
  text-align: left;
}
</style>
