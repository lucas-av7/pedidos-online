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

export default {
  components: { StoreInfo, Cart, Categories },
  data() {
    return {
      storeStatus: false,
      products: [
        {
        id: 1, 
        name: 'Panquecas',
        products: [
          {
            id: 1,
            name: 'Panqueca de Frango com Molho Bechamel', 
            description: 'Panqueca recheada com frango, queijo muçarela, molho bechamel, finalizada com queijo parmesão gratinado. Acompanhamento Opcional (Arroz Branco), sem custo.',
            price: 17.00,
            img: 'panqueca1.jpg',
            amount: 0
          },
          {
            id: 2,
            name: 'Panqueca de Carne ao Molho Bechamel', 
            description: 'Panqueca recheada com carne de boa qualidade, queijo mussarela, molho bechamel, finalizada com queijo parmesão gratinado. Acompanhamento Opcional (Arroz Branco), sem custo.',
            price: 17.00,
            img: 'panqueca2.jpg',
            amount: 0
          }
        ]
        },
        {
          id: 2,
          name: 'Lasanhas',
          products: [
            {
              id: 1,
              name: 'Lasanha de Frango com Molho Bechamel', 
              description: 'Lasanha de frango com molho bechamel, preparada com massa tradicional, recheada com muçarela, presunto e finalizando com o delicioso queijo parmesão gratinado.',
              price: 31.90,
              img: 'lasanha1.jpg',
              amount: 0
            },
            {
              id: 2,
              name: 'Lasanha Tradicional de Carne com Molho Bechamel', 
              description: 'Lasanha Tradicional, carne moída (alcatra ou contra filé), com molho bechamel, preparada com massa tradicional, recheada com muçarela, presunto, finalizando com o delicioso parmesão gratinado.',
              price: 35.90,
              img: 'lasanha2.jpg',
              amount: 0
            }
          ]
        },
        {
          id: 3,
          name: 'Feijoadas',
          products: [
            {
              id: 1,
              name: 'Feijoada individual bora cumê', 
              description: '750g incluindo os seguintes itens: feijoada, arroz, farofa, couve, laranja, e caldo quente apimentado.',
              price: 25.00,
              img: 'feijoada1.jpg',
              amount: 0
            },
            {
              id: 2,
              name: 'Feijoada no pote bora cumê', 
              description: '1 litro de feijoada no pote, acompanha arroz, farofa, couve, laranja, e caldo quente apimentado. serve 3 pessoas.',
              price: 59.90,
              img: 'feijoada2.jpg',
              amount: 0
            }
          ]
        }
      ],
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