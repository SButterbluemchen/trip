import "primevue/resources/themes/saga-blue/theme.css"; //theme
import "primevue/resources/primevue.min.css"; //core CSS
import "primeicons/primeicons.css"; //icons

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBeerMugEmpty } from '@fortawesome/free-solid-svg-icons'
import { faUtensils } from '@fortawesome/free-solid-svg-icons'

import './assets/stylesheets/main.scss'

import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';

library.add(faBeerMugEmpty, faUtensils);

const app = createApp(App);
app.use(PrimeVue);
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app');
