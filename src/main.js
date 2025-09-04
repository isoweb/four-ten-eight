import './assets/main.css'

import { createApp } from 'vue'

import { createUnhead } from 'unhead'

import App from './App.vue'
import router from './router'

const app = createApp(App)

const unhead = createUnhead()

app.use(router)

app.use(unhead)

app.mount('#app')

