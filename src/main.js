// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import routes from './router'
import MuseUI from 'muse-ui'
import VueRouter from 'vue-router'
import swiper from 'vue-awesome-swiper'
import 'muse-ui/dist/muse-ui.css'
import 'muse-ui/dist/theme-carbon.css'

Vue.use(MuseUI)
Vue.use(swiper)
Vue.use(VueRouter)
Vue.config.productionTip = false

const router = new VueRouter({
  routes,
  mode: 'history'
})

const routerApp = new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

export default routerApp
/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   router,
//   template: '<App/>',
//   components: { App }
// })

// const router = new VueRouter({
//   routes // （缩写）相当于 routes: routes
// })
// const app = new Vue({
//   router
// }).$mount('#app')
