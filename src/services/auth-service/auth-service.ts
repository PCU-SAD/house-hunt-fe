import { api } from '@/api/api'
import { LoginFormType } from '@/components/common/Layout/NavMenu/AuthDrawer/login/LoginForm/useLoginForm'
import { SignupPostValues } from '@/components/common/Layout/NavMenu/AuthDrawer/signup/SignupForm/useSignupForm'
import { LoginResponse, RefreshResponse } from '@/services/auth-service/types'
import { jwtService } from '@/services/jwt-service/jwt-service'
import axios from 'axios'

export const authService = {
  refresh: async () => {
    try {
      const refreshToken = localStorage.getItem('refreshToken') || ''

      const { data } = await api.post<RefreshResponse>('/auth/refreshToken', {
        token: refreshToken
      })

      const accessToken = data.token.split(' ')[1]
      const userData = jwtService.parse(accessToken)

      return {
        userData,
        accessToken: data.token
      }
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
