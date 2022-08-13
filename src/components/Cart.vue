<template>
  <div class="cart">
    <h3>Корзина товаров</h3>
  </div>
</template>

<script>
import { useCartStore } from '../stores/cart.js';
// useCartStore();
export default {
  name: "Cart",
  setup() {
    const store = useCartStore()
    return {
      store
    }
  }
}
</script>

<style scoped>

</style>