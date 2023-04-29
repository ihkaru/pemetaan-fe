<template>
  <div id="loginPage">
    <q-card class="q-pa-xl q-gutter-y-md column login-form" data-aos="zoom-out">
      <p class="text-center app-title">Mempawah App</p>
      <p class="text-center title">Login</p>
      <q-input v-model="email" type="email" outlined label="Email" />
      <q-input v-model="password" outlined type="password" label="Password" />
      <q-toggle v-model="rememberMe" label="Remember me" />
      <q-btn
        to="/map"
        color="primary"
        icon="login"
        label="Masuk"
        @click="onClick"
      />
      <div class="tw-w-full text-center">atau masuk dengan akun</div>
      <q-btn icon="img:./icons/bps.svg" label="SOBAT BPS" />
      <q-btn icon="img:./icons/bps.svg" label="SSO BPS" />
      <q-btn icon="img:./icons/google.svg" label="Google" />
    </q-card>
  </div>
</template>
<script setup>
import { ref } from "vue";
const rememberMe = ref(false);
const email = ref("");
const password = ref("");
</script>

<style lang="scss">
#loginPage {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .login-form {
    width: 450px;
    .app-title {
      font-weight: bold;
      font-size: large;
    }
    .title {
      font-size: x-large;
      font-weight: bold;
    }
  }
}
</style>
