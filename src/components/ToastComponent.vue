<template>
  <transition name="toast-fade" mode="out-in">
    <div v-if="show" class="toast" :class="type">
      {{ message }}
    </div>
  </transition>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ToastComponent",
  data() {
    return {
      show: false as boolean,
      message: "" as string,
      type: "" as string,
    };
  },
  methods: {
    showToast(message: string, type = "success", duration = 3000) {
      this.message = message;
      this.type = type;
      this.show = true;

      setTimeout(() => {
        this.hideToast();
      }, duration);
    },
    hideToast() {
      this.show = false;
    },
  },
});
</script>

<style scope>
.toast {
  position: absolute;
  top: 50px;
  right: 20px;
  transform: translateX(-50%);
  padding: 10px 20px;
  background-color: var(--primary-color);
  color: var(--color-text);
  border-radius: 5px;
  box-shadow: 0 0 10px var(--color-secondary);
  z-index: 999;
}

.success {
  background-color: #28a745;
}

.error {
  background-color: #dc3545;
}
.toast-fade-enter-active,
.toast-fade-leave-active {
  transition: opacity 0.5s;
}

.toast-fade-enter, .toast-fade-leave-to /* .toast-fade-leave-active in <2.1.8 */ {
  opacity: 0;
}
</style>
