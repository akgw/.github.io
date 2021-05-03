<template>
  <v-col cols="12" sm="12" md="12">
    <v-row>
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
            <v-expand-transition>
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
    </v-row>
  </v-col>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
const path = require('path')

interface IImage {
  dirname: string
  filepath: string
}

@Component
export default class PagesFavorites extends Vue {
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
}
</script>
