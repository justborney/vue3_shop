import { defineStore } from 'pinia';
import productsData from '/static/data.json'

export const useCartStore = defineStore({
  id: 'cart',
  state: () => {
    return {
      productsData,
    }
    // return {
    //   cartItems: [{
    //     article: '0001',
    //     available: 1
    //   },
    //   {
    //     article: '0002',
    //     available: 3
    //   }]
    // }
  },
})