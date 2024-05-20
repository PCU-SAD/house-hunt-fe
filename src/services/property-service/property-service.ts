import { api, authApi } from '@/providers/AuthProvider/AuthProvider'
import { PropertySearchParams } from '@/routes/properties'
import {
  CreatePropertyRequest,
  GetAllPropertiesResponse,
  PropertyType
} from '@/services/property-service/types'
import axios from 'axios'
import { format } from 'date-fns'

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
        `/properties/${propertyId}/images1`,
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
      const PAGE_SIZE = 5

      const sortKey = searchParams.sort.key
      const sortOrder = searchParams.sort.order

      // TODO: check all present filters
      const params = {
        size: PAGE_SIZE,
        page: searchParams.page - 1,
        minPrice: searchParams.minPrice,
        maxPrice: searchParams.maxPrice,
        sort: `${sortKey},${sortOrder}`,
        isFurnished: searchParams.isFurnished,
        availableFrom: format(searchParams.availableFrom, 'yyyy-MM-dd'),
        adType: searchParams.adType,
        apartmentType: searchParams.apartmentType,
        createdAt: searchParams.createdAt,
        minRooms: searchParams.minRooms,
        maxRooms: searchParams.maxRooms
      }

      if (searchParams.isFurnished === 'ALL') {
        delete params.isFurnished
      }

      if (searchParams.createdAt === 'ALL') {
        delete params.createdAt
      }

      if (searchParams.adType === 'ALL') {
        delete params.adType
      }

      const { data } = await api.get<GetAllPropertiesResponse>('/properties', {
        params
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

      return data
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(error.response?.data.message)
      } else {
        throw new Error('Something went wrong')
      }
    }
  },
  getById: async (propertyId: string) => {
    try {
      const { data } = await authApi.get<PropertyType>(`/properties/details`, {
        params: {
          id: propertyId
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
  deleteImages: async (propertyId: string) => {
    try {
      await authApi.delete(`/properties/${propertyId}`)
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(error.response?.data.message)
      } else {
        throw new Error('Something went wrong')
      }
    }
  }
}
