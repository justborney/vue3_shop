<template>
<div class="cart-total">
    <div class="total">
        Товары на сумму: {{ total }} ₽
    </div>
    <div>
        <button >Оформить заказ!!!</button>
    </div>
</div>
</template>

<script>
import { useStore } from '../store.js';

export default {
    name: "CartTotal",
    setup() {
        return {
            useStore: useStore()
        }
    },
    
    computed: {
        total() {
            return this.useStore.cart.reduce((buffer, productInCart) => {
                const product = this.useStore.productsData.find(product => product.article === productInCart.article)
                
                return buffer + product.price * productInCart.counter
            }, 0)
        }
    }
}

</script>

<style lang="scss" scoped>

</style>