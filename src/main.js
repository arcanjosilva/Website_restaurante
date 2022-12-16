import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAFuSf1XNvv88CTgCs1hSuWzgwqf1E61Ek",
    authDomain: "projeto2restauranteteste.firebaseapp.com",
    databaseURL: "https://projeto2restauranteteste-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "projeto2restauranteteste",
    storageBucket: "projeto2restauranteteste.appspot.com",
    messagingSenderId: "434851861697",
    appId: "1:434851861697:web:eaacde75599391fcefb040"
  };
firebase.initializeApp(firebaseConfig);
createApp(App).use(VueAxios , axios).use(store).use(router).mount('#app')

