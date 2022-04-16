<template>
  <v-col cols="12" sm="12" md="12">
    <v-card-title>
      <v-text-field v-model="search" append-icon="mdi-magnify" label="Search Name" single-line hide-details />
    </v-card-title>
    <v-data-table :headers="headers" :items="list" :search="search">
      <template #[`item.name`]="{ item }" class="text-right align-self-center">
        <div class="text-center">
          <span class="pr-3">{{ item.name }}</span>
          <v-icon v-if="item.icon">{{ item.icon }}</v-icon>
        </div>
      </template>

      <template #[`item.level`]="{ item }">
        <v-icon v-for="i of item.level" :key="`yellow-${i}`" color="yellow">mdi-star</v-icon>
        <v-icon v-for="i of 5 - item.level" :key="`white-${i}`" color="white">mdi-star</v-icon>
      </template>

      <template #[`item.category`]="{ item }">
        <p :class="item.color">{{ item.category }}</p>
      </template>
    </v-data-table>
  </v-col>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

interface IHeader {
  text: string
  filterable: boolean
  sortable: boolean
  value: string
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

@Component
export default class PagesCarrier extends Vue {
  search = ''
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

  list: IItem[] = [
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
}
</script>
