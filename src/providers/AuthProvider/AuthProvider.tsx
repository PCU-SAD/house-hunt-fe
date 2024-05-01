import { api } from '@/api/api'
import { queryClient } from '@/app'
import { toast } from '@/components/ui/use-toast'
import { authService } from '@/services/auth-service'
import { useQuery } from '@tanstack/react-query'
import { createContext, FC, ReactNode, useContext, useMemo } from 'react'

type AuthProviderProps = {
  children: ReactNode
}

export type AuthContextType = {
  user: string
  login: (username: string) => void
  logout: () => void
  isLoading: boolean
  isError: boolean
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType)

const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
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

  const value = useMemo(
    () => ({
      user: getMeData?.username,
      login,
      logout,
      isLoading,
      isError
    }),
    [getMeData?.username, isError, isLoading]
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

export default AuthProvider
