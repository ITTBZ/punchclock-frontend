import { createApp } from 'vue'
import router from './router'
import store from './store'

createApp({
  render: () => {
    template: `<router-view/>`
  }
}).use(store).use(router).mount('#app')
