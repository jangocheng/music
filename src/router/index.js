import Vue from 'vue'
import VueRouter from 'vue-router'
// 方式二（可行）import HelloWorld from '@/components/HelloWorld'

Vue.use(VueRouter)

const router = [
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
    path: '/home',
    name: 'home',
    component (resolve) {
      require.ensure(['../components/personal_header/personal_header'], () => {
        resolve(require('../components/personal_header/personal_header'))
      })
    }
  }, {
    path: '/personal',
    name: 'personal',
    component (resolve) {
      require.ensure(['../components/personal_header/personal_header'], () => {
        resolve(require('../components/personal_header/personal_header'))
      })
    }
  }
]
export default router
