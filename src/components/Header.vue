<template>
  <header>
    <div class="headerContent">
      <h1>Pedido Online</h1>
      <div class="menuMobile">
        <div class="bar1"></div>
        <div class="bar2"></div>
        <div class="bar3"></div>
      </div>
    </div>
    
  </header>
</template>

<script>
export default {

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
  }

  .menuMobile .bar1,
  .menuMobile .bar2,
  .menuMobile .bar3 {
    width: 40px;
    height: 5px;
    background-color: var(--primary-color);
  }
</style>