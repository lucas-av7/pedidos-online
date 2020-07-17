<template>
  <section class="info">
    <img src="../assets/logo.png" alt="Pedidos Online">
    <h2 class="storeName">Bora cumê?</h2>
    <p :class="{storeOpen: storeOpen.open,
      storeClosed: !storeOpen.open}">
      &bull; {{ storeOpen.text }}
    </p>
    <h3 class="waitTime">Tempo de espera</h3>
    <p>Entre 45-60min</p>
  </section>
</template>

<script>
export default {
  computed: {
    storeOpen() {
      let now = new Date
      let hour = now.getHours()
      let open = hour >= 11 && hour <= 20 ? true : false
      return { open, text: open ? 'Aberto!' : 'Fechado!' }
    }
  }
}
</script>

<style>
  .info {
    width: 95%;
    height: 400px;
    margin: 20px auto 0;
    background-color: white;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .info img {
    width: 70%;
    margin-top: 20px;
  }

  .storeName {
    margin-top: 5px;
  }

  p {
    font-size: 1.7rem;
  }

  p.storeOpen {
    color: green;
  }

  p.storeClosed {
    color: red;
  }
  
  .waitTime {
    margin-top: 10px;
  }
</style>