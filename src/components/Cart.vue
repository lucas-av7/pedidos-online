<template>
  <section class="cart">
    <h1>R$ 20,00</h1>
    <h1>Ver carrinho</h1>
    <h1><span>11</span></h1>
  </section>
</template>

<script>
export default {

}
</script>

<style>
  .cart {
    width: 90%;
    height: 55px;
    margin: 20px auto 0;
    padding: 10px;
    background-color: var(--main-color);
    border-radius: 7px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 1.3rem;
  }

  .cart h1:nth-child(1) {
    flex: 1;
    text-align: left;
  }

  .cart h1:nth-child(2) {
    flex: 2;
    text-align: center;
  }

  .cart h1:nth-child(3) {
    flex: 1;
    text-align: right;
  }

  .cart h1:nth-child(3) span {
    text-align: right;
    padding: 3px;
    border: 1px solid var(--primary-color);
    border-radius: 5px;
  }
</style>