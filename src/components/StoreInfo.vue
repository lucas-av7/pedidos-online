<template>
  <section class="info">
    <img src="../assets/logo.png" alt="Pedidos Online">
    <h2 class="storeName">Bora cumê?</h2>
    <p :class="{greenColor: storeOpen.open,
      redColor: !storeOpen.open}">
      &bull; {{ storeOpen.text }}
    </p>
    <p>Horário: 10:30h às 15:00h</p>
    <h3 class="waitTime">Tempo de espera</h3>
    <p>Entre 60-90min</p>
    <p class="greenColor freeShipping">🛵 Entrega grátis! 🛵</p>
  </section>
</template>

<script>
import moment from 'moment'
export default {
  computed: {
    storeOpen() {
      let format = 'HH:mm:ss'
      let timeNow = moment().format(format)

      let time = moment(timeNow, format),
      beforeTime = moment('10:30:00', format),
      afterTime = moment('15:00:00', format);

      let open = time.isBetween(beforeTime, afterTime)

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
    padding: 15px;
    margin: 80px auto 0;
    background-color: var(--primary-color);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .info img {
    width: 70%;
  }

  .storeName {
    margin-top: 5px;
  }

  p {
    font-size: 1.8rem;
  }

  p.greenColor {
    color: green;
  }

  p.redColor {
    color: red;
  }

  .freeShipping {
    margin-top: 5px;
    text-transform: uppercase;
  }
  
  .waitTime {
    margin-top: 10px;
  }

  @media screen and (min-width: 400px) {

    .info img {
      width: 230px;
    }
  }
</style>