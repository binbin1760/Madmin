import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { setupRouter } from './router/index'
import { setupStore } from './store/index'
import { setupDirectives } from './directives/'
import '@/mock/index'

async function initApp() {
  const app = createApp(App)
  setupStore(app)
  setupDirectives(app)
  setupRouter(app)
  app.mount('#app', true)
}

void initApp()
