<script setup>

</script>

<template>
  <div id="mainLayout" class="scrollbar-hide">
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
  #mainLayout {
    /* For Webkit-based browsers (Chrome, Safari and Opera) */
    .scrollbar-hide::-webkit-scrollbar {
        display: none;
    }

    /* For IE, Edge and Firefox */
    .scrollbar-hide {
        -ms-overflow-style: none;  /* IE and Edge */
        scrollbar-width: none;  /* Firefox */
    }
  }
  body {
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  
  }
  body::-webkit-scrollbar {
    display: none;
  }
</style>