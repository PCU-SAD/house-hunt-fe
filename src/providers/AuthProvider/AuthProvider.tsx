import { authService } from '@/services/auth-service/auth-service'
import { useQuery } from '@tanstack/react-query'
import { createContext, FC, ReactNode, useContext, useState } from 'react'

type AuthProviderProps = {
  children: ReactNode
}

export type UserType = 'TENANT' | 'OWNER' | 'ADMIN'

export type User = {
  email: string
  type: UserType | null
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
  const [user, setUser] = useState<User | null>(null)

  const {
    data: refreshData,
    isLoading,
    isError
  } = useQuery({
    queryKey: ['refresh'],
    queryFn: authService.refresh,
    retry: false
  })

  // api.interceptors.request.use(
  //   (config) => {
  //     // Add Authorization header to outgoing requests
  //     config.headers.Authorization = `Bearer ${refreshData?.accessToken}`
  //     return config
  //   },
  //   (error) => {
  //     // Handle request errors
  //     return Promise.reject(error)
  //   }
  // )

  // api.interceptors.response.use(
  //   (response) => {
  //     // Handle successful responses
  //     return response
  //   },
  //   async (error) => {
  //     const originalRequest = error.config

  //     // Check if the error is due to unauthorized access
  //     if (error.response?.status === 401 && !error.config._retry) {
  //       originalRequest._retry = true

  //       try {
  //         // Invalidate token and attempt to refresh
  //         await queryClient.invalidateQueries({ queryKey: ['refresh'] })
  //         return api.request(originalRequest)
  //       } catch (refreshError) {
  //         console.error('Error refreshing token:', refreshError)
  //         return Promise.reject(refreshError) // Re-throw the error for further handling
  //       }
  //     }

  //     // Continue propagating other errors
  //     return Promise.reject(error)
  //   }
  // )

  function login(user: User, refreshToken: string) {
    setUser(user)
    localStorage.setItem('refreshToken', refreshToken)
  }

  function logout() {}

  const value = {
    login,
    logout,
    isLoading,
    isError,
    user
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
