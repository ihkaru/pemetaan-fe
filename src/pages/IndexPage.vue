<template>
  <div id="indexPage">
    <q-card class="card q-pa-lg q-mx-xs">
      <q-btn label="login" color="primary" icon="login" to="/login"></q-btn>
    </q-card>
  </div>
</template>

<script setup=""></script>

<style lang="scss">
#indexPage {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .card {
    width: 100%;
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
