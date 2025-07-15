import { createApp } from 'vue'
// @ts-ignore
import App from './App.vue'
// @ts-ignore
import router from './router';
import { createPinia } from 'pinia';

createApp(App).use(createPinia()).use(router).mount('#app')
