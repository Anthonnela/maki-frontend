
<template>
  <div class="login-card">
    <div class="p-d-flex p-jc-center">
      <img src="/public/client-sign.jpg" alt="Customer Login Image" class="login-image">
    </div>
    <div class="p-fluid">
      <label>Login as Customer</label>
      <div class="p-field">
        <label for="email">Email</label>
        <pv-input-text id="email" v-model="email"></pv-input-text>
      </div>
      <div class="p-field">
        <label for="password">Password</label>
        <pv-input-text id="password" v-model="password" type="password"></pv-input-text>
      </div>
      <div class="p-d-flex p-jc-center">
        <pv-button @click="login()" class="p-mt-2">Login</pv-button>
      </div>
    </div>
  </div>
</template>
<script>

import router from "../router.js";
import {CustomerApiService} from "../services/customer-api.service..js";

export default {
  name: "Login-Customer",
  data() {
    return {
      email: "",
      password: "",
      customerApiService: new CustomerApiService(),
    };
  },
  methods: {
    async login() {
      const body = {
        email: this.email,
        password: this.password,
      };

      const response = await this.customerApiService.loginCustomer(
          body.email,
          body.password
      );

      if (response.data.length > 0) {
        alert("Login successful.");
        router.push("/home-customer");
        this.$store.commit("SET_CUSTOMER", response.data[0]);
      } else {
        alert("Invalid email or password.");
      }
    },
  },
};
</script>




<style scoped>
.login-card {
  max-width: 400px;
  margin: auto;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  background-color: #f9f9f9;
}

.login-image {
  width: 100%;
  height: auto;
  border-radius: 8px 8px 0 0;
}

.p-field {
  margin-bottom: 20px;
}
</style>