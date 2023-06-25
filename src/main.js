import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faHome, faPhone, faEnvelope, faList } from '@fortawesome/free-solid-svg-icons'

import App from './App.vue'
import router from './router'

const pinia = createPinia()

library.add(
  faHome,
  faPhone,
  faEnvelope,
  faList,
)

const app = createApp(App).component('font-awesome-icon', FontAwesomeIcon)

app.use(pinia)
app.use(router)

app.mount('#app')
