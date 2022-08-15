<template>
  <div class="product">
    <div class="product-image" :style="`background-image: url(${product.image})`" />
    <div class="product-description">
      <div class="product-description-wrap">
        <div class="product-price">{{ formatPrice }} ₽</div>
        <button :class="['product-add-to-cart', { 'product-disable': disableBtn }]" @click="addToCart" >
          {{ disableBtn ? 'Товар закончился' : 'Добавить в корзину' }}
        </button>
      
      </div>
      <div class="product-brand">{{ product.brand }}</div>
      <div class="product-name">{{ product.name }}</div>
    </div>
  </div>
</template>

<script>
import { useStore } from '../store.js';

export default {
  name: "CatalogItem",
  
  setup() {
    return {
      useStore: useStore()
    }
  },

  props: {
    product: {
      type: Object,
    },
  },
  
  computed: {
    formatPrice() {
      return new Intl.NumberFormat('ru-RU').format(this.product.price)
    },

    disableBtn() {
      const productInCart = this.useStore.cart.find(productInCart => productInCart.article === this.product.article)
      return productInCart?.counter === this.product.available
    }
  },

  methods: {
    addToCart() {
      if (this.disableBtn) return
      this.useStore.addToCart(this.product.article)
    }
  }
}
</script>

<style lang="scss" scoped>
.product {
  font-family: 'CoFo Sans',serif;
  font-size: 13px;
  font-weight: 400;
  width: 240px;
  height: 410px;
  margin: 10px;
  
  &-add-to-cart {
    font-weight: 500;
    padding: 0.3em 0.6em;
  }

  &-description {
    padding-top: 8px;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    
    &-wrap {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }

  &-brand {
    margin-top: 8px;
    line-height: 16px;
  }

  &-price {
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
  }

  &-name {
    line-height: 16px;
  }

  &-image {
    height: 340px;
    background-size: cover;
  }

  &-disable {
    background: gray;
  }
}

</style>