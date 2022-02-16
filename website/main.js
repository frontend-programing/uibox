import { createApp } from 'vue'
import App from './App.vue'
import UiBox from '../lib/index'
import '../packages/theme-chalk/lib/index.css'

createApp(App).use(UiBox).mount('#app')
