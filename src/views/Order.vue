<template>
  <div class="orderBox">
    <br>
    <br>
    <br>
    <br>
    <div v-if="order != undefined">
      <h1>{{ order.totalPrice | brazilianReal }}</h1>
      <h1><span>{{ order.totalAmount }}</span></h1>

      <div v-for="product in order.products" :key="product.name" class="productInCart">
        <p>{{ product.amount }}x {{ product.name }}</p>
        <p>{{ product.amount * product.price | brazilianReal }}</p>
      </div>
    </div>
    <div v-else>
      <p>Nenhum item no carrinho</p>
    </div>
    
    <router-link to="/">Voltar</router-link>
  </div>
</template>

<script>
export default {
  props: ['order'],
  filters: {
    brazilianReal(price) {
      return 'R$' + price.toFixed(2).toString().replace('.', ',')
    }
  }
}
</script>

<style>

</style>