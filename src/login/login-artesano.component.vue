

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

<script >
export default {
  name: 'login-artesano',
}

</script>


<style scoped>

</style>