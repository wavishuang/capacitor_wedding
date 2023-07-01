<template>
  <div class="layout">
    <RouterView />
  </div>
  

  <!-- <footer class="footer">
    <div class="content has-text-centered">
      <font-awesome-icon icon="fa-solid fa-caret-left" />
      <font-awesome-icon icon="fa-solid fa-home" />
      <font-awesome-icon icon="fa-solid fa-coffee" />
      <font-awesome-icon icon="fa-solid fa-arrow-right-from-bracket" />
    </div>
  </footer> -->
</template>

<script setup>
</script>

<style lang="scss">
.layout {
  width: 100vw;
  height: 100vh;
  background-image: url(@/assets/main_bg3.png);
  background-position: center top;
  background-repeat: no-repeat;
  background-size: cover;
  overflow-x: hidden;
  overflow-y: auto;
}
</style>
