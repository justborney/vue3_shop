<template>
  <div class="catalog">
    <div class="catalog-header">
      <!--потом убрать-->
      <h3>Каталог товаров</h3>
    </div>
    <div class="catalog-list">
      <catalog-item
        v-for="product in getProductsData"
        :key="product.article"
        :product="product"
      />
    </div>
  </div>
</template>

<script>
import productsData from "/static/data.json";
import catalogItem from "/src/components/CatalogItem.vue";


export default {
  name: "Catalog",
  computed: {
    getProductsData() {
      return productsData;
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