<template>
  <section class="cart">
    <div class="headerCart" @click="showCart = !showCart">
      <h1>{{ order.totalPrice | brazilianReal }}</h1>
      <h1>Ver carrinho</h1>
      <h1><span>{{ order.totalAmount }}</span></h1>
    </div>
    <div class="cartContent" v-show="showCart">
      <p v-if="order.totalAmount == 0">Nenhum produto no carrinho</p>
      <div v-else>
        <div v-for="product in order.products" :key="product.name" class="productInCart">
          <p>{{ product.amount }}x {{ product.name }}</p>
          <p>{{ product.amount * product.price | brazilianReal }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ['order'],
  filters: {
    brazilianReal(price) {
      return 'R$ ' + price.toFixed(2).toString().replace('.', ',')
    }
  },
  data() {
    return {
      showCart: false
    }
  }
}
</script>

<style>
  .cart {
    width: 90%;
    position: fixed;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    height: auto;
  }

  .headerCart {
    width: 100%;
    height: 55px;
    padding: 10px;
    background-color: var(--secondary-color);
    border-radius: 7px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 1.3rem;
    box-shadow: 0 0 6px black;
  }

  .headerCart h1:nth-child(1) {
    flex: 1;
    text-align: left;
  }

  .headerCart h1:nth-child(2) {
    flex: 2;
    text-align: center;
  }

  .headerCart h1:nth-child(3) {
    flex: 1;
    text-align: right;
  }

  .headerCart h1:nth-child(3) span {
    text-align: right;
    padding: 3px;
    border: 1px solid var(--primary-color);
    border-radius: 5px;
  }

  .cartContent {
    width: 100%;
    padding: 20px;
    height: auto;
    background-color: var(--primary-color);
    border: 2px solid #ccc;
  }

  .productInCart {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    border-bottom: 2px solid #ccc;
  }

  .productInCart p:nth-child(1) {
    flex: 1;
    text-align: left;
  }

  .productInCart p:nth-child(2) {
    width: 90px;
    text-align: right;
  }
</style>