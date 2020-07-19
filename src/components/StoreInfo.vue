<template>
  <section class="info">
    <img src="../assets/logo.png" alt="Pedidos Online">
    <h2 class="storeName">Bora cumê?</h2>
    <p :class="{storeOpen: storeOpen.open,
      storeClosed: !storeOpen.open}">
      &bull; {{ storeOpen.text }}
    </p>
    <p>Horário: 10:30h às 15:00h</p>
    <h3 class="waitTime">Tempo de espera</h3>
    <p>Entre 60-90min</p>
  </section>
</template>

<script>
export default {
  computed: {
    storeOpen() {
      let now = new Date
      let hour = now.getHours()
      let minutes = now.getMinutes()
      if(hour == 10 && minutes >= 30) hour = 10.5
      let open = hour >= 10.5 && hour <= 15 ? true : false
      this.$emit('storeStatus', open)
      return { open, text: open ? 'Aberto!' : 'Fechado!' }
    }
  }
}
</script>

<style>
  .info {
    width: 90%;
    max-width: 700px;
    height: 415px;
    margin: 80px auto 0;
    background-color: var(--primary-color);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .info img {
    width: 70%;
    margin-top: 15px;
  }

  .storeName {
    margin-top: 5px;
  }

  p {
    font-size: 1.8rem;
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

  @media screen and (min-width: 400px) {

    .info img {
      width: 230px;
      margin-top: 15px;
    }
  }
</style>