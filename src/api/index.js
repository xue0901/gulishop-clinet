//所有接口请求函数的文件
//每一个请求接口数据功能给他定义成一个函数，以函数后哪里需要请求数据，就调用对应的接口请求函数
import Ajax from '@/ajax/Ajax'
export const reqCategoryList = () => {
  return Ajax({
    url: '/product/getBaseCategoryList',
    method: 'get'
  })
}