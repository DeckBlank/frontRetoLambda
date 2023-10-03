<template>
  <main>
    <div class="row">
      <div class="container card col-12-xs col-6-xl">
        <h2>Resultado: /token</h2>
        <form @submit.prevent="submitForm">
          <div class="form-group">
            <label for="card_number">Número de Tarjeta:</label>
            <input
              type="number"
              id="card_number"
              v-model="formData.card_number"
              required
            />
          </div>
          <div class="form-group">
            <label for="email">Correo Electrónico:</label>
            <input type="email" id="email" v-model="formData.email" required />
          </div>
          <div class="form-group">
            <label for="cvv">CVV:</label>
            <input type="number" id="cvv" v-model="formData.cvv" required />
          </div>
          <div class="form-group">
            <label for="expiration_year">Año de Expiración:</label>
            <input
              type="text"
              id="expiration_year"
              v-model="formData.expiration_year"
              required
            />
          </div>
          <div class="form-group">
            <label for="expiration_month">Mes de Expiración:</label>
            <input
              type="text"
              id="expiration_month"
              v-model="formData.expiration_month"
              required
            />
          </div>
          <button type="submit">Enviar</button>
        </form>
      </div>
      <div class="container card col-12-xs col-6-xl">
        <h2>Resultado: /card-data</h2>
        <form @submit.prevent="submitToken">
          <div class="form-group">
            <label for="token">Token:</label>
            <input type="text" id="token" v-model="token" />
          </div>
          <div class="form-group">
            <label for="card_number">Número de Tarjeta:</label>
            <input
              type="number"
              id="card_number"
              v-model="result.card_number"
              disabled
            />
          </div>
          <div class="form-group">
            <label for="email">Correo Electrónico:</label>
            <input type="email" id="email" v-model="result.email" disabled />
          </div>
          <div class="form-group">
            <label for="expiration_year">Año de Expiración:</label>
            <input
              type="text"
              id="expiration_year"
              v-model="result.expiration_year"
              disabled
            />
          </div>
          <div class="form-group">
            <label for="expiration_month">Mes de Expiración:</label>
            <input
              type="text"
              id="expiration_month"
              v-model="result.expiration_month"
              disabled
            />
          </div>
          <button type="submit">Traer Tarjeta</button>
        </form>
      </div>
    </div>
  </main>
  <ToastComponent ref="toast" />
</template>
<style >
header {
  padding: 18px;
  text-align: center;
  font-size: 35px;
  color: var(--color-text);
}
</style>
<script lang="ts">
import { CCFormProps, ResultProps } from "./AppInterfaces";
import { defineComponent } from "vue";
import ToastComponent from "./ToastComponent.vue";
import { callFetch, callAxios } from "../api/call";
export default defineComponent({
  name: "MainComponent",
  components: {
    ToastComponent,
  },
  data() {
    return {
      formData: {
        card_number: 4532015112830366,
        email: "deckblqnk@gmail.com",
        cvv: 101,
        expiration_year: "2024",
        expiration_month: "12",
      } as CCFormProps,
      result: {
        card_number: "",
        email: "",
        expiration_year: "",
        expiration_month: "",
      } as ResultProps,
      token: "" as string,
    };
  },
  methods: {
    async submitForm(event: any) {
      event.preventDefault();
      const { card_number, email, cvv, expiration_year, expiration_month } =
        this.formData;
      const data = await callFetch({
        url: process.env.VUE_APP_TOKEN,
        data: { card_number, email, cvv, expiration_year, expiration_month },
      });
      (this.$refs.toast as any).showToast(data.message, data.status);
      if (data.status === "success") this.token = data.data.token;
    },
    async submitToken(event: any) {
      event.preventDefault();
      const data = await callAxios({
        url: process.env.VUE_APP_CARD_DATA,
        data: { token: this.token },
      });
      (this.$refs.toast as any).showToast(data.message, data.status);
      if (data.status === "success") this.result = data.data;
    },
  },
});
</script>
<style scoped>
.form-group {
  margin-bottom: 15px;
}

label {
  font-weight: bold;
}

input[type="text"],
input[type="number"],
input[type="email"] {
  width: 100%;
  padding: 8px;
  border: 1px solid var(--color-primary);
  border-radius: 4px;
}

input:focus {
  border: none;
  box-shadow: 0 0 0 2px var(--color-secondary);
}

button {
  background-color: var(--color-primary);
  color: var(--color-text);
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: var(--color-secondary);
}

.card {
  margin: 1rem;
  padding: 1rem;
  border: 1px solid var(--color-secondary);
  border-radius: 4px;
}
</style>
