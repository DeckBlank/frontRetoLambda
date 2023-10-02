<template>
  <div>
    <h2>
      Ingresa tu Tarjeta de Crédito (este es un formulario de prueba no ingresar
      datos reales)
    </h2>
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
</template>

<script lang="ts">
interface OptionalData {
  card_number : number
email: string
cvv : number
expiration_year : string
expiration_month : string
}
import axios from "axios";
import { defineComponent } from "vue"
import { VUE_APP_API_TOKEN, VUE_APP_TOKEN } from "../env";
export default defineComponent({
  data() {
    return {
      formData: {
        card_number: 4532015112830366,
        email: "deckblqnk@gmail.com",
        cvv: 101,
        expiration_year: "2024",
        expiration_month: "12",
      } as OptionalData,
    };
  },
  methods: {
    submitForm(event: any) {
      event.preventDefault();
      const {
        card_number,
        email,
        cvv,
        expiration_year,
        expiration_month,
      } = this.formData;
      axios
        .post(VUE_APP_TOKEN,{
        card_number,
        email,
        cvv,
        expiration_year,
        expiration_month,
      } , {
          headers: {
            Authorization: `Bearer ${VUE_APP_API_TOKEN}`,
          },
        })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
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
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>
