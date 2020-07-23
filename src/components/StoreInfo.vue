<template>
  <section class="info">
    <img src="../assets/logo.png" alt="Pedidos Online">
    <h2 class="storeName">Bora cumê?</h2>
    <p :class="{greenColor: storeOpen.open,
      redColor: !storeOpen.open}">
      &bull; {{ storeOpen.text }}
    </p>
    <h3 class="infoH3">Horários</h3>
    <p>10:00h às 15:00h</p>
    <p>18:00h às 23:00h</p>
    <h3 class="infoH3">Tempo de espera</h3>
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
      beforeTime1 = moment('10:00:00', format),
      afterTime1 = moment('15:00:00', format),
      beforeTime2 = moment('18:00:00', format),
      afterTime2 = moment('23:00:00', format);

      let open = time.isBetween(beforeTime1, afterTime1) || time.isBetween(beforeTime2, afterTime2)

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
  
  .infoH3 {
    margin-top: 10px;
  }

  @media screen and (min-width: 400px) {

    .info img {
      width: 230px;
    }
  }
</style>