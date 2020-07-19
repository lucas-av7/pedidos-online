<template>
  <section class="categories">
    <div class="headerCategory" @click="showCategory = !showCategory">
      <h1>{{ categoryName }}</h1>
      <div>
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
      </div>
    </div>

    <transition name="fadeHeight">
      <div class="productsContainer" v-show="showCategory">
        <Product v-for="(product, index) in products"
        :key="product.id" :product="product"
        @reduceAmount="$emit('reduceAmount', index)" 
        @addAmount="$emit('addAmount', index)" 
        />
      </div>
    </transition>
    
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
    max-width: 700px;
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
    border-radius: 7px;
    cursor: pointer;
    user-select: none;
  }

  .dot {
    height: 10px;
    width: 10px;
    background-color: var(--primary-color);
    border-radius: 50%;
    display: inline-block;
    margin-left: 3px;
  }

  .productsContainer {
    overflow: hidden;
    height: auto;
  }

  .fadeHeight-enter-active,
  .fadeHeight-leave-active {
    transition: all 0.5s;
    max-height: 100vh;
  }
  .fadeHeight-enter,
  .fadeHeight-leave-to
  {
    max-height: 0;
  }
</style>