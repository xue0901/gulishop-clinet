import Home from '../pages/Home'
import Login from '../pages/Login'
import Search from '../pages/Search'
import Register from '../pages/Register'

export default [
  //专门配置各种路由器的地方 
  //路由对象 
  {
    path: '/home',
    component: Home
  },
  {
    path: '/login',
    component: Login,
    meta: {
      isHide: true
    }
  },
  {
    path: '/search/:keyword?',
    component: Search,
    name: 'search',
    props: true //布尔值写法，代表的是把params参数通过属性传递给组件
    // props(route) {   //route收集好参数的路由对象，
    //把传递过来的params参数和query参数一起映射为组件的属性（）
    //   return {
    //     keyword: route.params.keyword,
    //     keyword2: route.query.keyword
    //   }
    // }
  },
  {
    path: '/register',
    component: Register,
    meta: {
      isHide: true
    }
  },
  {
    //重定向
    path: '/',
    redirect: '/home'
  }
]