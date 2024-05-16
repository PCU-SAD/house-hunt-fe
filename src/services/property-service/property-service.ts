import { api, authApi } from '@/providers/AuthProvider/AuthProvider'
import { PropertySearchParams } from '@/routes/properties'
import { wait } from '@/services/auth-service/auth-service'
import {
  CreatePropertyRequest,
  GetAllPropertiesResponse,
  PropertyType
} from '@/services/property-service/types'
import axios from 'axios'

export const propertyService = {
  createOne: async (values: CreatePropertyRequest) => {
    try {
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
      if (axios.isAxiosError(error)) {
        throw new Error(error.response?.data.message)
      } else {
        throw new Error('Something went wrong')
      }
    }
  },
  getAll: async (searchParams: PropertySearchParams) => {
    try {
      await wait(1000)
      const PAGE_SIZE = 20

      const { data } = await api.get<GetAllPropertiesResponse>('/properties', {
        params: {
          size: PAGE_SIZE,
          page: searchParams.page - 1,
          minPrice: searchParams.minPrice,
          maxPrice: searchParams.maxPrice
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
  },
  getPropertyImages: async (propertyId: string) => {
    try {
      const { data } = await api.get<string[]>(
        `/properties/${propertyId}/images`
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
  getOwnerProperties: async (ownerEmail: string) => {
    try {
      const { data } = await authApi.get<PropertyType[]>(
        `/properties/${ownerEmail}`
      )

      console.log('🚀 ~ getOwnerProperties: ~ data:', data)
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
