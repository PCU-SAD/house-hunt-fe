import { api, authApi } from '@/providers/AuthProvider/AuthProvider'
import {
  CreatePropertyRequest,
  GetAllPropertiesResponse
} from '@/services/property-service/types'
import axios from 'axios'

export const propertyService = {
  createOne: async (values: CreatePropertyRequest) => {
    try {
      new Promise((res) => setTimeout(res, 1000))
      console.log('request goes here')
      const { data } = await authApi.post<string>('/properties', values)

      return data
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(error.response?.data.message)
      } else {
        throw new Error('Something went wrong')
      }
    }
  },
  uploadImages: async (
    propertyId: string,
    images: File[],
    accessToken?: string
  ) => {
    try {
      const formData = new FormData()
      images.forEach((image) => {
        formData.append('images', image)
      })

      const { data } = await authApi.post(
        `/properties/${propertyId}/images`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${accessToken || ''}`
          }
        }
      )

      return data
    } catch (error) {
      console.log(error)
      if (axios.isAxiosError(error)) {
        throw new Error(error.response?.data.message)
      } else {
        throw new Error('Something went wrong')
      }
    }
  },
  getAll: async () => {
    try {
      const { data } = await api.get<GetAllPropertiesResponse>('/properties')

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
