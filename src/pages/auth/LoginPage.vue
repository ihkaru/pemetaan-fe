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
      <!-- <q-btn
        :href="
          api +
          '/login/google' +
          '?' +
          'redirect_client=' +
          redirect_after_login
        "
        icon="img:./icons/google.svg"
        label="Google"
      /> -->
      <GoogleLogin :callback="callback" class="tw-w-full" />
    </q-card>
  </div>
</template>
<script setup>
import { api } from "src/boot/axios";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { decodeCredential } from "vue3-google-login";

import useUserStore from "src/stores/user-store";

const userStore = useUserStore();
const rememberMe = ref(false);
const email = ref("");
const password = ref("");
const router = useRouter();

let redirect_after_login = process.env.redirect_after_login;
// console.log(process.env.API);

const callback = (response) => {
  // This callback will be triggered when the user selects or login to
  // his Google account from the popup
  // const userData = decodeCredential(response.credential);
  api
    .post("/auth/google/login", response)
    .then((response) => {
      userStore.setGoogleUser(response.data);
      router.push({ name: "map.index" });
      // console.log(userStore.name);
    })
    .catch((error) => console.log(error));
  // console.log("Handle the userData", userData);
  // console.log("Handle the response", response);
};
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
