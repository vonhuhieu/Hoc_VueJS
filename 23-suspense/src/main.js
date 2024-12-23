import { createApp } from 'vue'
import App from './App.vue'
import i18n from './plugins/i18n'

const app = createApp(App)

app.directive('focus', {
    mounted: (el) => el.focus()
})

app.use(i18n, {
    greetings: {
        hello: 'Xin chao',
        message: "ussr"
    }
})

app.mount('#app')
