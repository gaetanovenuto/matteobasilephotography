import './assets/scss/main.scss'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import store from './store.js'

const app = createApp(App).use(router).use(store).mount('#app')
