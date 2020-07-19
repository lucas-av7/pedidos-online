<template>
  <section class="categories">
    <div class="headerCategory">
      <h1>{{ categoryName }}</h1>
      <div @click="showCategory = !showCategory">
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
      </div>
    </div>

    <Product v-for="(product, index) in products"
      :key="product.id" :product="product" v-show="showCategory"
      @reduceAmount="$emit('reduceAmount', index)" 
      @addAmount="$emit('addAmount', index)" 
      />

  </section>
</template>

<script>
import Product from './Product.vue'

export default {
  components: { Product },
  props: ['categoryName', 'products', 'cart'],
  data() {
    return {
      showCategory: true
    }
  }
}
</script>

<style>
  .categories {
    width: 90%;
    margin: 20px auto 0;
    border-radius: 7px;
    background-color: var(--primary-color);
    font-size: 1.5rem;
    display: flex;
    flex-direction: column;
  }

  .headerCategory {
    width: 100%;
    height: 55px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    background-color: var(--main-color);
    border-top-left-radius: 7px;
    border-top-right-radius: 7px;
  }

  .dot {
    height: 10px;
    width: 10px;
    background-color: var(--primary-color);
    border-radius: 50%;
    display: inline-block;
    margin-left: 3px;
  }
</style>