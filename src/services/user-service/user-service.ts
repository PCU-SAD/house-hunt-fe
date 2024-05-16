import { VerificationFormType } from '@/pages/settings/account/components/VerificationForm/useVerificationForm'
import { authApi } from '@/providers/AuthProvider/AuthProvider'
import { GetAllUsersResponse, UserType } from '@/services/user-service/types'
import axios from 'axios'

export const userService = {
  verifyAccount: async (data: VerificationFormType) => {
    try {
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
      const { data } = await authApi.get<string[]>(`/user/documents/${email}`)

      return data
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(error.response?.data.message)
      } else {
        throw new Error('Something went wrong')
      }
    }
  },
  deleteDocument: async (document: string) => {
    try {
      await authApi.delete(`/user/documents/${document}`)
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(error.response?.data.message)
      } else {
        throw new Error('Something went wrong')
      }
    }
  },
  getById: async (userId: string) => {
    try {
      const { data } = await authApi.get<UserType>(`/user/${userId}`)

      console.log("🚀 ~ getById: ~ data:", data)
      
      return data
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(error.response?.data.message)
      } else {
        throw new Error('Something went wrong')
      }
    }
  },
  getAll: async (page: number, pageSize: number) => {
    try {
      const { data } = await authApi.get<GetAllUsersResponse>(`user/all`, {
        params: {
          size: pageSize,
          page
        }
      })

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
