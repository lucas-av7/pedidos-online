<template>
  <div class="home">
    <StoreInfo />
    <Cart />
    <Categories v-for="category in products" :key="category.id"
      :categoryName="category.name" :products="category.products" />
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
            img: 'panqueca1.jpg'
          },
          {
            id: 2,
            name: 'Panqueca de Carne ao Molho Bechamel', 
            description: 'Panqueca recheada com carne de boa qualidade, queijo mussarela, molho bechamel, finalizada com queijo parmesão gratinado. Acompanhamento Opcional (Arroz Branco), sem custo.',
            price: 17.00,
            img: 'panqueca2.jpg'
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
              img: 'lasanha1.jpg'
            },
            {
              id: 2,
              name: 'Lasanha Tradicional de Carne com Molho Bechamel', 
              description: 'Lasanha Tradicional, carne moída (alcatra ou contra filé), com molho bechamel, preparada com massa tradicional, recheada com muçarela, presunto, finalizando com o delicioso parmesão gratinado.',
              price: 35.90,
              img: 'lasanha2.jpg'
            }
          ]
        }
      ]
    }
  }
}

</script>

<style>
  .home {
    width: 100%;
  }

</style>