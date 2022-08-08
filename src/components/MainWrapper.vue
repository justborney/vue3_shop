<template>
  <div class="main-wrapper">
    <div class="header">
      <div class="logo">
        <router-link to="/">
          <img class="logo" src="/src/assets/images/logo.svg" alt="logo"/>
        </router-link>
      </div>
      <div class="cart">
        <router-link to="/cart">
          <div class="cart_btn">
            <img src="/src/assets/images/cart.svg" alt="cart"/>
            <span class="cart-text">Корзина</span>
          </div>
        </router-link>
      </div>
    </div>

    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "MainWrapper"
}
</script>

<style lang="scss" scoped>

.main-wrapper {
  width: 1040px;
  max-width: 1040px;
}
.header {
  background-color: #213547;
  color: antiquewhite;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  box-sizing: border-box;
  align-items: center;
}
.logo {
  width: 160px;
  height: 32px;
}
.cart_btn {
  display: flex;
  gap: 5px;
  color: white;
  line-height: 24px;
}
.cart-text {
  padding-top: 5px;
}

</style>