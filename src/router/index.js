import Vue from 'vue'
import Router from 'vue-router'
// 方式二（可行）import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'welcome',
      // 方式一（不可行）component: require('../views/index')
      // 方式二（可行）component: HelloWorld
      // 方式三（可行）component: resolve => require(['../views/index'],resolve)
      component (resolve) {
        require.ensure(['../views/welcome'], () => {
          resolve(require('../views/welcome'))
        })
      }
    }, {
      path: '/index',
      name: 'index',
      component (resolve) {
        require.ensure(['../components/swiper/swiper'], () => {
          resolve(require('../components/swiper/swiper'))
        })
      }
    }
  ]
})
