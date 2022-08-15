import { defineStore } from 'pinia';
import productsData from '/static/data.json';

export const useStore = defineStore({
  id: 'Store',

  state: () => {
    return {
      productsData,
      cart: []
    }
  },

  actions: {
    addToCart(article) {
      const foundProduct = this.cart.find(product => product.article === article);

      if (foundProduct) {
        foundProduct.counter += 1;
      } else {
        this.cart.push({
          article,
          counter: 1
        });
      }
    },

    deleteFromCart(article) {
      const foundProduct = this.cart.find(product => product.article === article);

      if (foundProduct.counter === 1) {
        this.cart = this.cart.filter(product => product.article !== article)
      } else {
        foundProduct.counter -= 1;
      }
    }
  }
});
