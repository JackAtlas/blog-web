import Vue from 'vue'
// import VueMaterial from 'vue-material'
// import 'vue-material/dist/vue-material.min.css'

import App from './App.vue'
import router from './router'

import './styles/styles.scss'

Vue.config.productionTip = false

// Vue.use(VueMaterial)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
