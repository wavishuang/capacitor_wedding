import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { 
  faHome, faPhone, faEnvelope, faList,
  faCoffee, faCaretUp, faCaretDown, faCaretLeft, faCaretRight,
  faArrowRightFromBracket, faDownload,
  faBars
} from '@fortawesome/free-solid-svg-icons'
import 'bulma/css/bulma.min.css'

import App from './App.vue'
import router from './router'

const pinia = createPinia()

library.add(
  faHome,
  faPhone,
  faEnvelope,
  faList,
  faCoffee,
  faCaretUp, faCaretDown, faCaretLeft, faCaretRight,
  faArrowRightFromBracket, faDownload,
  faBars
)

const app = createApp(App).component('font-awesome-icon', FontAwesomeIcon)

app.use(pinia)
app.use(router)

app.mount('#app')
