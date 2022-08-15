<template>
  <div class="cart">
    <h3>Корзина товаров</h3>
    <div class="products">
      <div v-for="product in useStore.cart" :key="product.artilce" class="product">
        <div>{{ product.article }}</div>
        <div>{{ product.counter }}</div>
        <button @click="deleteFromCart(product.article)">Удалить</button>
      </div>
    </div>
    <div class="checkout" v-if="useStore.cart.length">
      <cart-total />
    </div>
    <div v-else>Корзина пуста.</div>
  </div>
</template>

<script>
import { useStore } from '../store.js';
import CartTotal from './CartTotal.vue'

export default {
  name: "Cart",

  components: {
    CartTotal
  },

  setup() {
    return {
      useStore: useStore()
    }
  },

  methods: {
    deleteFromCart(article) {
      this.useStore.deleteFromCart(article)
    }
  }
}
</script>

<style lang="scss" scoped>
.products {
  display: flex;

  .product {
    margin: 10px;
    background-color: yellow;
  }
}
</style>