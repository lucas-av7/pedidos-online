<template>
  <div class="product">
    <div class="productImg">
        <img :src="require(`@/assets/cardapio/${product.img}`)" :alt="product.name">
      </div>
      <div class="productInfo">
        <h3>{{ product.name }}</h3>
        <p class="productPrice">{{ product.price | brazilianReal }}</p>
        <p @click="descriptionShow = !descriptionShow"
          :class="{ descriptionShow }">{{ !descriptionShow ? '+' : '-' }} Descrição</p>
        <p v-show="descriptionShow">{{ product.description }}</p>
        <div class="amount">
          <button @click="$emit('reduceAmount')">-</button>
            <span class="amountProduct">{{ product.amount }}</span>
          <button @click="$emit('addAmount')">+</button>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  props: ['product'],
  filters: {
    brazilianReal(price) {
      return 'R$ ' + price.toFixed(2).toString().replace('.', ',')
    }
  },
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
    padding: 0 10px;
    margin: 10px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
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
</style>