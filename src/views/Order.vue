<template>
  <div class="orderBox">

    <div class="deliveryData" v-show="order != undefined">

      <h1>Dados para Entrega</h1>

      <div class="addressForm">
        <span class="required">*</span>
        <label for="name">Nome:</label>
        <input type="text" name="name" v-model="deliveryData.name">
      </div>
      
      <div class="addressForm">
        <span class="required">*</span>
        <label for="phone">Telefone:</label>
        <the-mask :mask="['(##) ####-####', '(##) #####-####']"
          v-model="deliveryData.phone" :masked="true" type="tel" />
        <!-- <input type="number" name="phone" v-model="deliveryData.phone"> -->
      </div>

      <div class="addressForm">
        <span class="required">*</span>
        <label for="street">Rua:</label>
        <input type="text" name="street" v-model="deliveryData.street">
        <span class="required">*</span>
        <label for="homeNumber">Nº:</label>
        <input type="text" name="homeNumber" v-model="deliveryData.homeNumber">
      </div>

      <div class="addressForm">
        <span class="required">*</span>
        <label for="district">Bairro:</label>
        <input type="text" name="district" v-model="deliveryData.district">
      </div>

      <div class="addressForm">
        <label for="complement">Complemento:</label>
        <input type="text" name="complement" v-model="deliveryData.complement">
      </div>

      <div class="addressForm">
        <label for="paymentMethod">Forma de pagamento:</label>
        <select name="paymentMethod" v-model="deliveryData.paymentMethod">
          <option selected>Dinheiro</option>
          <option>Cartão</option>
        </select>
      </div>

      <div v-if="deliveryData.paymentMethod == 'Dinheiro'" class="addressForm change">
        <label for="change">Troco para:</label>
        <Money v-model="deliveryData.change" v-bind="money" t></money>
      </div>

    </div>

    <div class="deliveryData" v-show="order != undefined">

      <h2>Observações do pedido</h2>

      <div class="addressForm">
        <textarea name="orderDetails" v-model="deliveryData.orderDetails"
          placeholder="Ex: pouco sal, sem salada, etc..."></textarea>
      </div>

    </div>

    <div v-if="order != undefined" class="orderDetails">
      <img src="../assets/logo.png" alt="Pedidos Online">
      <h1>Pedido</h1>

      <div v-for="product in order.products" :key="product.name" class="productInCart">
        <p>{{ product.amount }}x {{ product.name }}</p>
        <p>{{ product.amount * product.price | realMask }}</p>
      </div>

      <div class="deliveryDetails">

        <template v-if="deliveryData.orderDetails != ''">
          <h3>Observações do pedido:</h3>
          <p>{{ deliveryData.orderDetails }}</p>
        </template>
        <h3>Enviar para:</h3>
        <p>Nome: {{ deliveryData.name }}</p>
        <p>Telefone: {{ deliveryData.phone }}</p>
        <p>Rua: {{ deliveryData.street }} {{ deliveryData.homeNumber }}</p>
        <p>Bairro: {{ deliveryData.district }}</p>
        <p v-show="deliveryData.complement">Complemento: {{ deliveryData.complement }}</p>
      </div>

      <h3><span>Quantidade de itens: {{ order.totalAmount }}</span></h3>
      <h3>Total: {{ order.totalPrice | realMask }}</h3>
      <p>Forma de pagamento: {{ deliveryData.paymentMethod }}</p>
      <p v-if="deliveryData.paymentMethod == 'Dinheiro'">Troco para: {{ deliveryData.change }}</p>
      
      <button :disabled="!enableSend" class="sendOrder whatsapp"
        @click="sendOrder">
        <img src="../assets/whatsapp.png" alt="Whatsapp">Enviar pedido
      </button>
      <div v-show="!enableSend">
        <p><span class="required">*</span> Campos obrigatórios com erro</p>
        <ul v-for="(fields, index) in emptyFields" :key="index">
          <li>{{ fields }}</li>
        </ul>
      </div>
    </div>
    <div v-else>
      <p>Nenhum item no carrinho</p>
    </div>

    <router-link to="/" class="backLink">Voltar</router-link>
  </div>
</template>

<script>
import { TheMask } from 'vue-the-mask'
import { Money } from 'v-money'
import realMask from '../mixins/realMask'

export default {
  components: { TheMask, Money },
  props: ['order'],
  mixins: [realMask],
  data() {
    return {
      deliveryData: {
        name: '',
        phone: '',
        street: '',
        homeNumber: '',
        district: '',
        complement: '',
        orderDetails: '',
        paymentMethod: 'Dinheiro',
        change: ''
      },
      phoneNumber: process.env.VUE_APP_PHONENUMBER,
      money: {
        decimal: ',',
        thousands: '.',
        prefix: 'R$ ',
        precision: 2,
        masked: true
      },
      emptyFields: []
    }
  },
  methods: {
    sendOrder() {
      window.location.href = 'https://api.whatsapp.com/send?phone=' + this.phoneNumber + '&text=' + this.textOrder
    }
  },
  watch: {
    deliveryData: {
      deep: true,
      handler() {
        if(this.deliveryData.paymentMethod == 'Cartão') this.deliveryData.change = ''
        this.emptyFields = []
        if(this.deliveryData.name == '') this.emptyFields.push('Nome não pode estar em branco')
        if(this.deliveryData.phone.length < 14) this.emptyFields.push('Telefone deve ter 8 ou 9 dígitos')
        if(this.deliveryData.street == '') this.emptyFields.push('Rua não pode estar em branco')
        if(this.deliveryData.homeNumber == '') this.emptyFields.push('Nº da casa não pode estar em branco')
        if(this.deliveryData.district == '') this.emptyFields.push('Bairro não pode estar em branco')
      }
    }
  },
  computed: {
    textOrder() {

let deliveryData = `*Pedido Online*
Nome: ${this.deliveryData.name}
Telefone: ${this.deliveryData.phone}
Endereço: ${this.deliveryData.street}, N ${this.deliveryData.homeNumber}
Bairro: ${this.deliveryData.district}
Complemento: ${this.deliveryData.complement}
Observações do pedido: ${this.deliveryData.orderDetails}
Método de pagamento: ${this.deliveryData.paymentMethod}
Troco para: ${this.deliveryData.change}

`

let order = `*Produtos*`
for(let i = 0; i < this.order.products.length; i++) {
  order +=  '\n' + this.order.products[i].amount  + 'x ' + this.order.products[i].name 
}

let total = `\n 
*Total:* R$ ${this.order.totalPrice.toFixed(2) } `

      return window.encodeURIComponent(deliveryData + order + total);
    },
    enableSend() {
      let textInput = this.deliveryData
      if(!textInput.name || textInput.phone.length < 14 || !textInput.street || !textInput.homeNumber || !textInput.district) {
        return false
      } else {
        return true
      }
    }
  }
}
</script>

<style>
  .orderBox {
    width: 90%;
    max-width: 700px;
    height: auto;
    margin: 80px auto 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .orderDetails {
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    background-color: #fffbce;
    border: 4px dashed #555;
  }

  .orderDetails img {
    width: 20%;
  } 

  .orderDetails h1,
  .deliveryData h1  {
    color: var(--headers-color);
    margin: 0 0 10px;
  } 

  .deliveryData {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--primary-color);
    border-radius: 10px;
    padding: 10px;
    margin-bottom: 20px;
    border: 1px solid #999;
  }

  .addressForm {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 5px 0;
    width: 100%;
  }

  .addressForm input,
  .addressForm select {
    height: 25px;
  }

  .addressForm input,
  .addressForm textarea {
    width: 100%;
    min-width: 60px;
    padding: 5px;
    margin: 0 10px;
    border: 1px solid #999;
  }

  .addressForm textarea {
    height: 80px;
  }

  .addressForm select {
    width: 100px;
    margin: 0 10px;
  }

  .addressForm.change label {
    width: 150px;
  }

  .addressForm input[name = homeNumber] {
    width: 60px;
  }

  .deliveryDetails {
    width: 90%;
    max-width: 500px;
    margin-bottom: 20px;
  }

  .sendOrder.whatsapp {
    display: flex;
    justify-content: center;
    align-items: center;
    
  }

  .sendOrder img {
    width: 30px;
    margin-right: 10px;
  }

  .router-link-active {
    text-decoration: none;
  }

  .backLink {
    margin-top: 20px;
    color: var(--main-color);
    font-size: 2.8rem;
    text-decoration: underline;
  }

  .required {
    color: red;
    margin-right: 3px;
  }

  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type=number] {
    -moz-appearance: textfield;
  }

</style>