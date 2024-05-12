import { VerificationFormType } from '@/pages/settings/account/components/VerificationForm/useVerificationForm'
import { authApi } from '@/providers/AuthProvider/AuthProvider'
import { wait } from '@/services/auth-service/auth-service'
import axios from 'axios'

export const userService = {
  verifyAccount: async (data: VerificationFormType) => {
    try {
      await wait(500)
      const formData = new FormData()

      formData.append('documentType', data.type)
      formData.append('file', data.document)

      return await authApi.post('/user/documents/upload', formData)
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(error.response?.data.message)
      } else {
        throw new Error('Something went wrong')
      }
    }
  },
  getDocuments: async (email: string) => {
    try {
      await wait(500)
      const { data } = await authApi.get<string[]>(`/user/documents/${email}`)
      console.log('🚀 ~ getDocuments: ~ data:', data)

      return data
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(error.response?.data.message)
      } else {
        throw new Error('Something went wrong')
      }
    }
  }
}
