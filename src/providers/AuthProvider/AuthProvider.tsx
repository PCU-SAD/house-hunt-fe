import { api } from '@/api/api'
import { queryClient } from '@/app'
import { authService } from '@/services/auth-service/auth-service'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { createContext, FC, ReactNode, useContext } from 'react'

type AuthProviderProps = {
  children: ReactNode
}

export type UserType = 'TENANT' | 'OWNER' | 'ADMIN'

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
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType)

const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const {
    data: refreshData,
    isLoading,
    refetch,
    isError
  } = useQuery({
    queryKey: ['refresh'],
    queryFn: authService.refresh,
    retry: false
  })

  const userFromPayload = refreshData?.userData
    ? {
        email: refreshData.userData.email,
        type: refreshData.userData.role
      }
    : null

  console.log('userFromPayload: ', userFromPayload)

  api.interceptors.response.use(
    (response) => {
      return response
    },
    async (error) => {
      const originalRequest = error.config

      if (error.response.status === 403 && !originalRequest._retry) {
        originalRequest._retry = true

        await refetch()
        const accessToken = refreshData?.accessToken

        axios.defaults.headers.common['Authorization'] = 'Bearer ' + accessToken
      }

      return Promise.reject(error)
    }
  )

  function login(user: User, refreshToken: string) {
    queryClient.setQueryData(['refresh'], (oldData: any) => ({
      ...oldData,
      userData: user
    }))

    localStorage.setItem('refreshToken', refreshToken)
  }

  function logout() {
    console.log('logout')
    queryClient.setQueryData(['refresh'], null)
    localStorage.removeItem('refreshToken')
  }

  const value = {
    login,
    logout,
    isLoading,
    isError,
    user: userFromPayload
  }

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
