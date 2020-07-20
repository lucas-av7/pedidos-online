<template>
  <div class="sidebar">
    <div class="exitArea" @click="$emit('hideSidebar')"></div>
    <aside>
      <button class="buttonHideSidebar" @click="$emit('hideSidebar')">X</button>
      <img src="../assets/logo.png" alt="Pedidos Online" class="logoSidebar">
      <div class="storeSidebarInfo">
        <h2>Bora cumê?</h2>
        <p>Rua Angola, nº 88</p>
        <p>Bairro: Flores</p>
        <p>Manaus - AM</p>
        <p><img class="wppSidebar" src="../assets/whatsapp.png" alt="Whatsapp"> (92) 98188-7337</p>
      </div>
      <div class="copyright">
        <p>Desenvolvido por:</p>
        <a target="_blank" href="https://lucas-av7.github.io/" title="Ver portfólio">Lucas-AV7</a>
      </div>
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
    width: 100%;
    height: 100vh;
    background-color: #000000AA;
    position: absolute;
    top: 0;
    left: 0%;
  }

  aside {
    width: 60%;
    max-width: 500px;
    height: 100vh;
    background-color: white;
    position: absolute;
    top: 0;
    right: 0%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
  }

  .buttonHideSidebar {
    width: 35px;
    height: 35px;
    border-radius: 50%;
    border: none;
    outline: none;
    cursor: pointer;
    margin-top: 3px;
    margin-right: 3px;
    align-self: flex-end;
    font-size: 1.8rem;
    background-color: var(--main-color);
    color: var(--primary-color);
  }

  .logoSidebar {
    width: 80%;
    height: auto;
    max-width: 250px;
    margin-top: 5px;
  }

  .storeSidebarInfo {
    margin-top: 5px;
    text-align: center;
  }

  .wppSidebar {
    width: 22px;
    vertical-align: middle;
  }

  .copyright {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    margin-bottom: 50px;
    font-size: 1.8rem;
  }

  .copyright a {
    color: var(--main-color);
  }
</style>