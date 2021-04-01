import Vue from 'vue'
import Vuetify from 'vuetify'
import VueRouter from 'vue-router'
import 'vuetify/dist/vuetify.css'
import VueChartist from 'vue-chartist'

// include components
import Layout from './components/layout.vue'
import Dashboard from './components/dashboard.vue'
import Products from './components/products.vue'
import Sales from './components/sales.vue'
import Quotes from './components/quotes.vue'
import Purchases from './components/purchases.vue'
import Transfers from './components/transfers.vue'
import Reports from './components/reports.vue'

// register modules
Vue.use(Vuetify)
Vue.use(VueRouter)
Vue.use(require('vue-chartist'))

// register components
Vue.component('layout', Layout)

// set up routes
const routes = [
  { path: '/', redirect: '/dashboard'},
  { path: '/dashboard', component: Dashboard },
  { path: '/products', component: Products },
  { path: '/sales', component: Sales },
  { path: '/quotes', component: Quotes },
  { path: '/purchases', component: Purchases },
  { path: '/transfers', component: Transfers },
  { path: '/reports', component: Reports }
]
const router = new VueRouter({
  routes
})

// initialize Vue
new Vue({
  router
}).$mount('#app')
