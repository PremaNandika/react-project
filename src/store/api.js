import axios from 'axios'
const instance = axios.create({
  baseURL: 'http://localhost:5000'
})
instance.interceptors.request.use(
  (req) => {
    const token = localStorage.getItem('token')
    req.headers.Authorization = token ? 'Bearer' + token : ''
    return req
   }, undefined
)
instance.interceptors.response.use(
  undefined,(err) => {
    if (err.response && err.response.status == 401) {
      localStorage.removeItem('token')
      window.location.reload()
    }
  }
)
export default instance