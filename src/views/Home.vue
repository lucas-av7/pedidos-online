<template>
  <div class="home">
    <StoreInfo @storeStatus="storeStatus = $event" />
    <Cart :order="order" :storeStatus="storeStatus" @emptyCart="emptyCart"/>
    <Categories v-for="(category, index) in products" :key="category.id"
      :categoryName="category.name" :products="category.products"
      @reduceAmount="reduceAmount(index, $event)" 
      @addAmount="addAmount(index, $event)" 
      />
  </div>
</template>

<script>
import StoreInfo from '../components/StoreInfo.vue'
import Cart from '../components/Cart.vue'
import Categories from '../components/Categories.vue'
import products from '../data/products'

export default {
  components: { StoreInfo, Cart, Categories },
  data() {
    return {
      storeStatus: false,
      products,
      order: { totalPrice: 0, totalAmount: 0, products: [] }
    }
  },
  methods: {
    addAmount(category, product) {
      this.products[category].products[product].amount++
      
    },
    reduceAmount(category, product) {
      if(this.products[category].products[product].amount > 0) {
        this.products[category].products[product].amount--
      }
    },
    emptyCart() {
      this.order = { totalPrice: 0, totalAmount: 0, products: [] }
      let category = this.products
      for(let i = 0; i < category.length; i++) {
        for(let j = 0; j < category[i].products.length; j++) {
          category[i].products[j].amount = 0
        }
      }
    }
  },
  watch: {
    products: {
      deep: true,
      handler() {
        let category = this.products
        let order = { totalPrice: 0, totalAmount: 0, products: [] }
        for(let i = 0; i < category.length; i++) {
          for(let j = 0; j < category[i].products.length; j++) {
            if(category[i].products[j].amount > 0) {
              order.totalPrice += category[i].products[j].amount * category[i].products[j].price
              order.totalAmount += category[i].products[j].amount
              order.products.push({
                name: category[i].products[j].name,
                amount: category[i].products[j].amount,
                price: category[i].products[j].price
              })
            }
          }
        }
        return this.order = order
      }
    }
  }
}

</script>

<style>
  .home {
    width: 100%;
  }

</style>