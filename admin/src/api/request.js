import axios from "axios"
import store from "@/store"


const request = axios.create({
  baseURL: "/api",
  timeout: 5000 // ms
})


// 请求
request.interceptors.request.use((config) => {
  try {
    if(store.state.user.token) {
      config.headers['Authorization'] = `Bearer ${store.state.user.token}`
    }
  } catch (error) {
    console.log(error)
  }
      
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