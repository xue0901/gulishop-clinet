//发送AJAX请求
//对AJAX二次开发
//1.配置基础路径和超时限制

//2.添加进度条信息 nprogress

//3.返回的响应不需要从data中拿数据，而是响应就是我们要的数据

//4.统一处理错误信息，具体请求也可以选择处理或不处理

//一般我们在二次封装的时候不会直接在axios上改变
//而是通过create创建一个新的axios实例进行操作

import axios from 'axios'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
//创建一个axios实例
const instance = axios.create({
  baseURL: '/api', //配置基础路径
  timeout: 20000, //配置超时时间
});
//请求拦截器和响应拦截器
//请求拦截器添加达赖进度条
//请求拦截器
instance.interceptors.request.use(
  config => {
    NProgress.start();
    //处理config (请求报文)
    //添加额外的功能
    return config //返回config 请求继续发送 发送的报文信息就是新的config对象

  }
);
//响应拦截器
instance.interceptors.response.use(
  response => {
    NProgress.done();
    //3
    //默认返回的是response 也就是我们的响应报文信息 如果要获取数据 从response.data中获取
    //现在我们在返回行营之前把响应直接改成了数据 以后就不用去.data获取数据
    return response.data
  },
  error => {
    NProgress.done();
    //4.
    alert('发送请求失败：' + error.message || '未知错误')
    //如果你需要进一步处理这个数据，那么就返回一个失败的promise
  }
);
export default instance // 暴露出去