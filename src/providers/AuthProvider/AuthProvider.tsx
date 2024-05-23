import { queryClient } from '@/app'
import { authService } from '@/services/auth-service/auth-service'
import { RefreshResponse } from '@/services/auth-service/types'
import { jwtService } from '@/services/jwt-service/jwt-service'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { createContext, FC, ReactNode, useContext } from 'react'

export const API_URL = import.meta.env.VITE_API_URL

export const api = axios.create({
  baseURL: API_URL,
  paramsSerializer: {
    indexes: null
  }
})

export const authApi = axios.create({
  baseURL: API_URL
})

type AuthProviderProps = {
  children: ReactNode
}

export type UserRole = 'TENANT' | 'LANDLORD' | 'ADMIN'
export type UserVerificationType = 'VERIFIED' | 'PENDING_VERIFICATION' | 'NOT_VERIFIED'

export type UserDTO = {
  email: string
  type: UserRole
  status: UserVerificationType
}

export type AuthContextType = {
  user: UserDTO | null
  login: (user: UserDTO, refreshToken: string, accessToken: string) => void
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
    isError
  } = useQuery({
    queryKey: ['refresh'],
    queryFn: authService.refresh,
    retry: false
  })

  authApi.interceptors.response.use(
    (response) => {
      return response
    },
    async (error) => {
      const originalRequest = error.config

      if (error.response.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true

        const refreshToken = localStorage.getItem('refreshToken') || ''

        const { data } = await api.post<RefreshResponse>('/auth/refreshToken', {
          token: refreshToken
        })

        const accessToken = data.token.split(' ')[1]
        const userData = jwtService.parse(accessToken)

        if (accessToken) {
          originalRequest.headers.Authorization = 'Bearer ' + accessToken

          authApi.defaults.headers.common['Authorization'] =
            'Bearer ' + accessToken

          queryClient.setQueryData(['refresh'], {
            accessToken,
            userData: {
              email: userData.email,
              role: userData.role
            }
          })
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

        if (!accessToken) {
          return config
        }

        config.headers.Authorization = `Bearer ${accessToken}`
      }

      return config
    },
    (error) => {
      return Promise.reject(error)
    }
  )

  function login(user: UserDTO, refreshToken: string, accessToken: string) {
    queryClient.setQueryData(['refresh'], {
      userData: {
        email: user.email,
        role: user.type,
        status: user.status
      },
      accessToken
    })

    localStorage.setItem('refreshToken', refreshToken)
  }

  function logout() {
    queryClient.setQueryData(['refresh'], {
      userData: null,
      accessToken: ''
    })

    localStorage.removeItem('refreshToken')
  }

  const value = {
    user: refreshData?.userData?.email
      ? {
          email: refreshData.userData.email,
          type: refreshData.userData.role,
          status: refreshData.userData.status
        }
      : null,
    login,
    logout,
    isLoading,
    isError,
    accessToken: refreshData?.accessToken
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
