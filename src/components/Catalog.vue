<template>
  <div class="catalog">
    <div class="catalog-header">
      <!--потом убрать-->
      <h3>Каталог товаров</h3>
    </div>
    <div class="catalog-list">
      <catalog-item
        v-for="product in store.productsData"
        :key="product.article"
        :product="product"
      />
    </div>
  </div>
</template>

<script>
import catalogItem from "/src/components/CatalogItem.vue";
import { useCartStore } from '../stores/cart.js';


export default {
  name: "Catalog",
  setup() {
    const store = useCartStore()
    return {
      store
    }
  },
  components: {
    catalogItem
  }
}

</script>

<style lang="scss" scoped>

.catalog-header {
  text-align: center;
}

.catalog-list {
  display: flex;
  flex-wrap: wrap;
}

</style>