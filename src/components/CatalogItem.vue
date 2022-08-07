<template>
  <div class="catalog-item">
    <div class="product-image" :style="`background-image: url(${product.image})`" />
    <div class="product-description">
      <div class="product-description-wrap">
        <div class="product-price">{{ formatPrice(product.price) }} ₽</div>
      </div>
      <div class="product-description-wrap">
        <div class="product-brand">{{ product.brand }}</div>
        <div class="product-name">{{ product.name }}</div>
        <button class="product-add-to-cart" @click="addToCart(product.article)">Добавить в корзину</button>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "CatalogItem",
  props: {
    product: {
      type: Object,
    },
  },

  methods: {
    formatPrice(price) {
      return new Intl.NumberFormat('ru-RU').format(price)
    },

    addToCart(products) {
      //TODO Добавление в корзину
    }
  },


}



</script>

<style scoped>

.product-add-to-cart {
  width: 100%;
}

.catalog-item {
  width: 240px;
  height: 410px;
  margin: 10px;
}

.product-description {
  padding-top: 8px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.product-brand {
  margin-top: 8px;
}

.product-price {
  font-family: 'CoFo Sans',serif;
  font-weight: 700;
  font-style: normal;
  font-size: 16px;
  line-height: 20px;
}

.product-brand {
  font-family: 'CoFo Sans',serif;
  font-weight: 400;
  font-style: normal;
  font-size: 13px;
  line-height: 16px;
}

.product-name {
  font-family: 'CoFo Sans', sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 13px;
  line-height: 16px;
}

.product-image {
  /*width: 210px;*/
  height: 340px;
  background-size: cover;
}

</style>