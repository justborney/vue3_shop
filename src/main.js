import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createRouter, createWebHistory } from 'vue-router'

import './assets/styles/style.css'

import App from './App.vue'
import Catalog from './components/Catalog.vue';
import Cart from './components/Cart.vue';

const pinia = createPinia()
const app = createApp(App)
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/', component: Catalog
    },
    {
      path: '/cart', component: Cart
    }
  ],
})

app.use(pinia)
app.use(router)

app.mount('#app')