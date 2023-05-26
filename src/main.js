import { createApp } from 'vue'
import router from './router/index.js'
import App from './App.vue'
import 'material-design-icons-iconfont/dist/material-design-icons.css';
import vuetify from './plugins/vuetify'
import "vuetify/dist/vuetify.min.css";


import { loadFonts } from './plugins/webfontloader'



loadFonts()

createApp(App).use(router)
  .use(vuetify)
  .mount('#app')
