import { api } from '@/api/api'
import { LoginFormType } from '@/components/common/Layout/NavMenu/AuthDrawers/login/LoginForm/useLoginForm'
import { SignupPostValues } from '@/components/common/Layout/NavMenu/AuthDrawers/signup/SignupForm/useSignupForm'
import axios from 'axios'

export const authService = {
  refresh: async () => {
    try {
      const data = await new Promise<{
        accessToken: string
      }>((res) => {
        setTimeout(() => {
          res({
            accessToken: 'token'
          })
        }, 10)
      })

      return data
    } catch (error) {
      throw new Error('Not authorized')
    }
  },
  signup: async (signupData: SignupPostValues) => {
    try {
      const { data } = await api.post('/auth/register', signupData)

      return data
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
      // const { data } = await api.post('/login', loginData)
      console.log(loginData)
      
      return true
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(error.response?.data.message)
      } else {
        throw new Error('Something went wrong')
      }
    }
  }
}
