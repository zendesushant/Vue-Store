import { createApp } from 'vue'
import App from './App.vue'
import routes from './components/AppRoutes'
import appStore from './store/AppStore'
import "bootstrap/dist/css/bootstrap.min.css"

let app = createApp(App);
app.use(appStore);
app.use(routes)
app.mount('#app')
