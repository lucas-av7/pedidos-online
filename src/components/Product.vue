<template>
  <div class="product">
    <div class="productImg">
        <img :src="require(`@/assets/cardapio/${product.img}`)" :alt="product.name">
      </div>
      <div class="productInfo">
        <h3>{{ product.name }}</h3>
        <p class="productPrice">{{ product.price | realMask }}</p>
        <p class="descreptionButton" @click="descriptionShow = !descriptionShow"
          :class="{ descriptionShow }">{{ !descriptionShow ? '+' : '-' }} Descrição</p>
        <transition name="fade">
          <p v-show="descriptionShow">{{ product.description }}</p>
        </transition>
        <div class="amount">
          <button @click="$emit('reduceAmount')">-</button>
            <span class="amountProduct">{{ product.amount }}</span>
          <button @click="$emit('addAmount')">+</button>
        </div>
      </div>
  </div>
</template>

<script>
import realMask from '../mixins/realMask'

export default {
  props: ['product'],
  mixins: [realMask],
  data() {
    return {
      descriptionShow: false
    }
  }
}
</script>

<style>
  .product {
    width: 100%;
    min-height: 160px;
    max-height: auto;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid #ccc;
  }

  .productImg {
    width: 150px;
    height: 150px;
    overflow: hidden;
  }

  .productImg img {
    width: 100%;
    height: 100%;
  }

  .productInfo {
    flex: 1;
    min-height: 160px;
    padding: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
    text-align: right;
  }

  .productPrice {
    color: var(--secondary-color);
  }

  .amount button {
    border: none;
    outline: none;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    cursor: pointer;
    color: var(--headers-color);
    margin-top: 5px;
  }

  .amountProduct {
    margin: 0 7px;
  }

  .descriptionShow {
    color: var(--main-color);
    margin: 0 0 5px;
  }

  .descreptionButton {
    cursor: pointer;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: all 0.3s;
    opacity: 1;
  }
  .fade-enter,
  .fade-leave-to
  {
    font-size: 0;
    opacity: 0;
  }
</style>