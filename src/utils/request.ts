import axios from 'axios'

const http = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API,
  timeout: 10000,
  withCredentials: false
})

http.interceptors.request.use(
  (config) => {
    return config
  },
  (err) => {
    return Promise.reject(err)
  }
)

http.interceptors.response.use(
  (res) => {
    const data = res.data
    return data
  },
  (err) => {
    return Promise.reject(err)
  }
)

export { http as request }
