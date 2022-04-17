<template>
  <v-row>
    <v-col>
      <div class="links">
        <account-icon href="https://github.com/akgw" icon="mdi-github" />
        <account-icon href="https://www.facebook.com/ryunosuke.akagawa" icon="mdi-facebook" />
        <account-icon href="mailto:ryu.akagawa@gmail.com" icon="mdi-gmail" />
      </div>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import accountIcon from '~/components/molecules/account-icon.vue'
@Component({
  components: {
    accountIcon
  }
})
export default class Accounts extends Vue {}
</script>
<style lang="scss" scoped>
.links {
  & > a {
    text-decoration: none;
  }
}
</style>
