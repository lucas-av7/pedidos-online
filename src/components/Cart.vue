<template>
  <section class="cart" v-show="order.totalAmount > 0">
    <div class="headerCart" @click="showCart = !showCart">
      <h1>{{ order.totalPrice | realMask }}</h1>
      <h1>Ver carrinho</h1>
      <h1><span>{{ order.totalAmount }}</span></h1>
    </div>
    <div class="cartContent" v-show="showCart">
      <div class="orderToSend">
        <div v-for="product in order.products" :key="product.name" class="productInCart">
          <p>{{ product.amount }}x {{ product.name }}</p>
          <p>{{ product.amount * product.price | realMask }}</p>
        </div>
        <router-link v-if="storeStatus" :to="{ name: 'Order', params: { order } }"
          tag="button" class="sendOrder" @click="showCart = false">
          Solicitar pedido</router-link>
        <p v-else>Loja fechada!</p>
        <p class="emptyCart" @click="$emit('emptyCart'), showCart = false">Esvaziar carrinho</p>
      </div>
    </div>
  </section>
</template>

<script>
import realMask from '../mixins/realMask'

export default {
  props: ['order', 'storeStatus'],
  mixins: [realMask],
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
    max-width: 700px;
    position: fixed;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    height: auto;
    overflow: hidden;
    user-select: none;
    z-index: 1;
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
    cursor: pointer;
  }

  .headerCart h1:nth-child(1) {
    flex: 1;
    text-align: left;
  }

  .headerCart h1:nth-child(2) {
    flex: 1;
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
    justify-content: space-between;
    width: 100%;
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

  .orderToSend {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .sendOrder {
    width: 230px;
    height: 50px;
    border-radius: 7px;
    outline: none;
    border: none;
    background-color: var(--secondary-color);
    color: var(--primary-color);
    font-size: 2.5rem;
    box-shadow: 1px 1px 3px #555;
    cursor: pointer;
    margin: 10px 0;
  }

  .sendOrder:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }

  .emptyCart {
    margin-top: 10px;
    color: var(--main-color);
    cursor: pointer;
  }
</style>