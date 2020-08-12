import Vue from 'vue'
import App from './App'
import router from '@/router'
import TypeNav from './components/TypeNav'
// import {reqCategoryList} from '@/api'
import store from './store'
import '@/api'
//注冊全局組件
Vue.component('TypeNav', TypeNav)
new Vue({
  router, //注册给Vue添加路由功能并且内部都有两个对象可以拿到$router $toute
  store,
  render: h => h(App)
}).$mount('#app')