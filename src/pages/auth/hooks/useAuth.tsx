import { api } from '@/api/api'
import { queryClient } from '@/app'
import { authService } from '@/services/auth-service'
import { useQuery } from '@tanstack/react-query'

export type Auth = {
  login: (username: string) => void
  logout: () => void
  username?: string | null
}

export function useAuth() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['refresh'],
    queryFn: authService.refresh
  })

  // const getMeQuery = useQuery({
  //   queryKey: ['getMe'],
  //   queryFn: () => {}
  // })

  api.interceptors.response.use((config) => {
    config.headers.Authorization = `Bearer ${data.accessToken}`

    return config
  })

  api.interceptors.response.use(
    (config) => config,
    async (error) => {
      const originalRequest = error.config

      if (error.response.status === 401 && !error.config._retry) {
        originalRequest._retry = true

        try {
          queryClient.invalidateQueries({
            queryKey: ['refresh']
          })

          return api.request(originalRequest)
        } catch (error) {
          console.log('Not authorized')
        }
      }
    }
  )

  function login(user_name: string) {
    queryClient.setQueryData(['getMe'], {
      username: user_name
    })
  }

  function logout() {
    queryClient.setQueryData(['getMe'], null)
  }

  return {
    username: 'user_name',
    login,
    logout,
    isError,
    isLoading
  }
}
