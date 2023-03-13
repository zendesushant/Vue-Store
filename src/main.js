import { createApp } from 'vue'
import App from './App.vue'
import routes from './components/AppRoutes'
import appStore from './store/AppStore'

let app = createApp(App);
app.use(appStore);
app.use(routes)
app.mount('#app')
