<template>
  <templates-index />
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import templatesIndex from '~/components/templates/index.vue'

@Component({
  components: {
    templatesIndex
  }
})
export default class PagesIndex extends Vue {}
</script>
