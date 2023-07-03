import "primevue/resources/themes/saga-blue/theme.css"; //theme
import "primevue/resources/primevue.min.css"; //core CSS
import "primeicons/primeicons.css"; //icons
import './assets/stylesheets/main.scss'

import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';

const app = createApp(App);
app.use(PrimeVue);

app.mount('#app');