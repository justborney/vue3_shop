import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createRouter, createWebHistory } from 'vue-router'
import './style.css'
import App from './App.vue'

const pinia = createPinia()
const app = createApp(App)
const router = createRouter({
  history: createWebHistory(),
  routes: [], //Тут будут роуты
})

app.use(pinia)
app.use(router)

app.mount('#app')