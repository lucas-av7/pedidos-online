<template>
  <div class="sidebar">
    <div class="exitArea" @click="$emit('hideSidebar')"></div>
    <aside>

    </aside>
  </div>
</template>

<script>
export default {

}
</script>

<style>
  .sidebar {
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    right: 0%;
    z-index: 3;
  }

  .exitArea {
    width: 50%;
    height: 100vh;
    background-color: #000000AA;
    position: absolute;
    top: 0;
    left: 0%;
  }

  aside {
    width: 50%;
    height: 100vh;
    background-color: white;
    position: absolute;
    top: 0;
    right: 0%;
  }
</style>