import { api } from '@/api/api'
import { LoginFormType } from '@/components/common/Layout/NavMenu/AuthDrawers/login/LoginForm/useLoginForm'
import { SignupPostValues } from '@/components/common/Layout/NavMenu/AuthDrawers/signup/SignupForm/useSignupForm'
import { LoginResponse } from '@/services/auth-service/types'
import axios from 'axios'

export const authService = {
  refresh: async () => {
    try {
      const refreshToken = localStorage.getItem('refreshToken')

      const { data } = await api.post('/auth/refreshToken', {
        refreshToken
      })

      return data
    } catch (error) {
      throw new Error('Not authorized')
    }
  },
  signup: async (signupData: SignupPostValues) => {
    try {
      await api.post('/user/register', signupData)
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(error.response?.data.message)
      } else {
        throw new Error('Something went wrong')
      }
    }
  },
  login: async (loginData: LoginFormType) => {
    try {
      const { data } = await api.post<LoginResponse>('/auth/login', loginData)

      return data
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(error.response?.data.message)
      } else {
        throw new Error(error?.message)
      }
    }
  }
}
