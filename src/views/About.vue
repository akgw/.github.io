<template>
  <div class="about">
    <h1>This is an about page</h1>
    <ColorPicker v-model="color" />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import ColorPicker from 'primevue/colorpicker';

export default defineComponent({
  components: {
    ColorPicker
  },
  setup () {
    return {
      color: '1976D2'
    }
  }
})
</script>
