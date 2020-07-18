<template>
  <div id="app">
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from './components/Header.vue'

export default {
  components: { Header }
}
</script>

<style>
  :root {
    --main-color: #e63946;
    --headers-color: #1d3557;
    --text-color: #457b9d;
    --backup-color: #a8dadc;
    --primary-color: #fff;
    --secondary-color: #009900;
    font-size: 62.5%;
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    font-size: 1.6rem;
    background-image: url(./assets/bg-repeat.jpg);
    background-repeat: repeat;
    background-size: 100%;
    color: var(--text-color);
    font-family: 'Roboto', sans-serif;;
  }

  h1 {
    color: var(--primary-color);
  }

  h2, h3, h4, h5, h6 {
    color: var(--headers-color);
  }
</style>