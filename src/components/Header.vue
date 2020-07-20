<template>
  <div class="menuContent">
    <header>
      <div class="headerContent">
        <h1>Pedido Online</h1>
        <div class="menuMobile" @click="sidebar = true, overflow('hidden')">
          <div class="bar1"></div>
          <div class="bar2"></div>
          <div class="bar3"></div>
        </div>
      </div>
    </header>
    <transition name="showSidebar">
      <SideBar v-show="sidebar" @hideSidebar="sidebar = false, overflow('initial')"/>
    </transition>
  </div>
  
</template>

<script>
import SideBar from './SideBar.vue'

export default {
  components: { SideBar },
  data() {
    return {
      sidebar: false
    }
  },
  methods: {
    overflow(status) {
      document.body.style.overflowY = status
    }
  }
}
</script>

<style>
  header {
    width: 100%;
    height: 60px;
    background-color: var(--main-color);
    position: fixed;
    box-shadow: 0 1px 5px black;
    top: 0;
    user-select: none;
    z-index: 2;
  }

  .headerContent {
    width: 90%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .menuMobile {
    width: 50px;
    height: 50px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    cursor: pointer;
  }

  .menuMobile .bar1,
  .menuMobile .bar2,
  .menuMobile .bar3 {
    width: 40px;
    height: 5px;
    background-color: var(--primary-color);
  }

  .showSidebar-enter-active,
  .showSidebar-leave-active {
    transition: all 0.3s;
    right: 0;
    opacity: 1;
  }
  .showSidebar-enter,
  .showSidebar-leave-to
  {
    right: -100%;
    opacity: 0;
  }
</style>