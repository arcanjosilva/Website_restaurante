import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import carrinho from '../views/carrinho.vue'
import Erro from '../views/Erro.vue'
import SignUpView from '../views/SignUpView.vue'




const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },

 
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/SignUp',
    name: 'signup',
    component: SignUpView
  },

  {
    path: '/carrinho',
    name: 'carrinho',
    component: carrinho
  },
  {
    path: '/:catchAll(.*)',
    name: 'erro',
    component: Erro
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
