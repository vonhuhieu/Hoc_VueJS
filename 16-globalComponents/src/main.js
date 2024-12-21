import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import GlobalComponent from './components/GlobalComponent.vue'

const app = createApp(App)

app.component('ComponentA', GlobalComponent)
app.provide("message", "Hello from USSR")
app.use(createPinia())
app.use(router)

app.mount('#app')
