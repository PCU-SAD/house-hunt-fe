import axios from 'axios'

export const API_URL = import.meta.env.VITE_API_URL

const api = axios.create({
  baseURL: API_URL,
  withCredentials: true
})

api.interceptors.response.use((config) => {
  const accessToken = localStorage.getItem('accessToken')

  config.headers.Authorization = `Bearer ${accessToken}`

  return config
})

api.interceptors.response.use(
  (config) => config,
  async (error) => {
    const originalRequest = error.config

    if (error.response.status === 401 && !error.config._retry) {
      originalRequest._retry = true

      try {
        const { data } = await axios.get(`${API_URL}/api/auth/refresh`, {
          withCredentials: true
        })

        localStorage.setItem('accessToken', data.accessToken)

        return api.request(originalRequest)
      } catch (error) {
        console.log('Not authorized')
      }
    }
  }
)
