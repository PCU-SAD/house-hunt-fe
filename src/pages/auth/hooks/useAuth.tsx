import { api } from '@/api/api'
import { queryClient } from '@/app'
import { toast } from '@/components/ui/use-toast'
import { authService } from '@/services/auth-service'
import { useQuery } from '@tanstack/react-query'

export type Auth = {
  login: (username: string) => void
  logout: () => void
  username?: string | null
}

export function useAuth() {
  const {
    data: refreshData,
    isLoading,
    isError
  } = useQuery({
    queryKey: ['refresh'],
    queryFn: authService.refresh
  })

  const { data: getMeData } = useQuery({
    queryKey: ['getMe'],
    queryFn: () => {
      return {
        username: 'user from jwt token'
      }
    },
    enabled: !!refreshData
  })

  api.interceptors.response.use((config) => {
    config.headers.Authorization = `Bearer ${refreshData.accessToken}`

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

      if (error.response.status >= 400) {
        toast({
          variant: 'destructive',
          title: 'Uh oh! Something went wrong.',
          description:
            'There was a problem with your request. Please try again later.'
        })
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
    username: getMeData?.username,
    login,
    logout,
    isError,
    isLoading
  }
}
