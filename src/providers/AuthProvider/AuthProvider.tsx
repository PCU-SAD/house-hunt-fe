import { queryClient } from '@/app'
import { authService } from '@/services/auth-service/auth-service'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { createContext, FC, ReactNode, useContext } from 'react'

export const API_URL = import.meta.env.VITE_API_URL

export const api = axios.create({
  baseURL: API_URL
})

export const authApi = axios.create({
  baseURL: API_URL
})

type AuthProviderProps = {
  children: ReactNode
}

export type UserType = 'TENANT' | 'LANDLORD' | 'ADMIN'

export type User = {
  email: string
  type: UserType
}

export type AuthContextType = {
  user: User | null
  login: (user: User, refreshToken: string) => void
  logout: () => void
  isLoading: boolean
  isError: boolean
  accessToken: string | undefined
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType)

const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const {
    data: refreshData,
    isLoading,
    refetch: refetchRefresh,
    isError
  } = useQuery({
    queryKey: ['refresh'],
    queryFn: authService.refresh,
    retry: false
  })

  const user = refreshData?.userData?.email
    ? { email: refreshData.userData.email, type: refreshData.userData.role }
    : null

  authApi.interceptors.response.use(
    (response) => {
      return response
    },
    async (error) => {
      const originalRequest = error.config

      if (error.response.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true

        await refetchRefresh()
        const accessToken = refreshData?.accessToken

        console.log('catching 403')

        if (accessToken) {
          authApi.defaults.headers.common['Authorization'] =
            'Bearer ' + accessToken
        }

        return authApi(originalRequest)
      }

      return Promise.reject(error)
    }
  )

  authApi.interceptors.request.use(
    (config) => {
      if (!config?.headers?.Authorization) {
        const accessToken = refreshData?.accessToken

        config.headers.Authorization = `Bearer ${accessToken}`
      }

      return config
    },
    (error) => {
      console.log('🚀 ~ error:', error)
      return Promise.reject(error)
    }
  )

  function login(user: User, refreshToken: string) {
    queryClient.setQueryData(['refresh'], {
      userData: {
        email: user.email,
        role: user.type
      }
    })

    localStorage.setItem('refreshToken', refreshToken)
  }

  function logout() {
    queryClient.setQueryData(['refresh'], {
      userData: {
        email: null,
        role: null
      },
      accessToken: ''
    })
    localStorage.removeItem('refreshToken')
  }

  const value = {
    accessToken: refreshData?.accessToken,
    login,
    logout,
    isLoading,
    isError,
    user
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuthContext() {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

export default AuthProvider
