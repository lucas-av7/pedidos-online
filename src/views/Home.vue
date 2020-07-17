<template>
  <div class="home">
    <StoreInfo />
    <Cart />
  </div>
</template>

<script>
import StoreInfo from '../components/StoreInfo.vue'
import Cart from '../components/Cart.vue'

export default {
  components: { StoreInfo, Cart }
}
</script>

<style>
  .home {
    width: 100%;
  }

</style>