<template>
  <header>{{ msgHeader }} <span class="message"> (formulario de prueba, no ingresar datos reales)</span> </header>
</template>
<style >
header {
  display:grid;
  padding: 18px;
  text-align: center;
  font-size: 35px;
  color: var(--color-text);
}
@media (min-width: 700px) {
  header {
    display:flex;
    margin: auto;
    align-items: center;
  }
}
</style>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "HeaderComponent",
  props: {
    msgHeader: String,
  },
});
</script>
