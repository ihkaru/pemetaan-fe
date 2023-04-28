<template>
    <div id="loginPage">
        <q-card class="q-pa-xl q-gutter-y-md column login-form" data-aos="fade-left">
            <p class="text-center app-title">Mempawah App</p>
            <p class="text-center title">Login</p>
            <q-input outlined label="Email" />
            <q-input outlined label="Password" />
            <q-toggle v-model="rememberMe" label="Remember me"/>
            <q-btn to="/map" color="primary" icon="login" label="login" @click="onClick" />
        </q-card>
    </div>
</template>
<script setup>
    import {ref} from "vue";
    const rememberMe = ref(false);
</script>

<style lang="scss">
    #loginPage {
        width: 100vw;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        .login-form{
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