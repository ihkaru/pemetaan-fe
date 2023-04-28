<template>
  <div id="listPage" data-aos="fade-right">
    <q-card class="banner q-pa-lg">
      <div class="content text-lg" style="font-size: xx-large;">
        <div>
          <q-icon name="settings" color="primary"></q-icon>
          <q-title style="font-weight: bold;">Coming Soon</q-title>
        </div>
      </div>
    </q-card>
  </div>
</template>

<script setup>

</script>

<style lang="scss">
  #listPage{
    display: flex;
    width: 100vw;
    height: 100vh;
    align-items: center;
    justify-content: center;

    .banner{
      width: 100vw;
      max-width: 500px;
      height: 200px;
      margin: 0 20px;
      
      .content {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
      }
    }
  }
</style>
