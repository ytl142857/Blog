import axios from "axios"


const request = axios.create({
  baseURL: process.env.VUE_APP_APIURL,
  timeout: 5000 // ms
})


// 请求
request.interceptors.request.use((config) => {

  return config
})


// 响应
request.interceptors.response.use((res) => {
  if(res.data) return res.data
  return res
}, (error) => {
  return Promise.reject(new Error('响应失败'))
})


export default request