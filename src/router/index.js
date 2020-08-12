import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from '../router/routes'

Vue.use(VueRouter) //声明使用插件
//暴露出去的是路由器对象
const router = new VueRouter({
  routes
})
export default router