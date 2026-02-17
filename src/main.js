import "@/assets/main.css"

import { createApp } from 'vue'
import App from './App.vue'
import Task from "./component/Task.vue"


const vueApp = createApp(App)

vueApp.component('Task', Task)

vueApp.mount('#app')

