<template>
  <TabMenu :model="items" />
  <router-view />
</template>
<script lang="ts">
import TabMenu from 'primevue/tabmenu'
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  components: {
    TabMenu
  },
  setup() {
    return {
      items: [
        {
          label: 'Home',
          icon: 'pi pi-fw pi-home',
          to: '/'
        },
        {
          label: 'Histories',
          icon: 'pi pi-fw pi-calendar',
          to: '/histories'
        },
        {
          label: 'Skills',
          icon: 'pi pi-fw pi-pencil',
          to: '/skills'
        },
        {
          label: 'Qualifications',
          icon: 'pi pi-fw pi-file',
          to: '/qualifications'
        },
        {
          label: 'SelfPR',
          icon: 'pi pi-fw pi-file',
          to: '/selfpr'
        },
        {
          label: 'Interests',
          icon: 'pi pi-fw pi-cog',
          to: '/interests'
        }
      ]
    }
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
