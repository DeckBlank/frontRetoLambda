<template>
  <div id="spa" class="container">
    <HeaderComponent msgHeader="Reto lambda." />
    <MainComponent />
  </div>
</template>

<script lang="ts">
import HeaderComponent from "./components/HeaderComponent.vue";
import MainComponent from "./components/MainComponent.vue";

import { defineComponent } from "vue";

export default defineComponent({
  components: {
    HeaderComponent,
    MainComponent,
  },
});
</script>

<style >
</style>
