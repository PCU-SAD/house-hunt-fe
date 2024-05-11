import { api, authApi } from '@/providers/AuthProvider/AuthProvider'
import {
  CreatePropertyRequest,
  GetAllPropertiesResponse
} from '@/services/property-service/types'
import axios from 'axios'

export const propertyService = {
  createOne: async (values: CreatePropertyRequest) => {
    try {
      new Promise(res => setTimeout(res, 1000))
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
  uploadImages: async (propertyId: string, images: File[]) => {
    try {
      const formData = new FormData()
      images.forEach((image, index) => {
        formData.append(`image_${index + 1}`, image)
      })

      const { data } = await authApi.post(
        `/properties/${propertyId}/images`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }
      )

      return data
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(error.response?.data.message)
      } else {
        throw new Error('Something went wrong')
      }
    }
  },
  getAll: async () => {
    try {
      const { data } = await api.get<GetAllPropertiesResponse>('/properties', {
        headers: {
          'Content-Type': 'application/json'
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
