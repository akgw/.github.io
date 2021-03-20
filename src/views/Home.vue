<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
    <!-- <inputtext v-model="val"></inputtext> -->
    <h6>{{val}}</h6>
    <InputSwitch v-model="checked" />


  </div>
</template>
<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import InputSwitch from 'primevue/inputswitch';

export default defineComponent({
  components: {
    HelloWorld,
    InputSwitch
  },
  setup () {

    return {
      val: 2,
      checked: true
    }
  }
})
</script>
