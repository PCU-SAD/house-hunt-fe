import { api, authApi } from '@/api/api'
import {
  CreatePropertyRequest,
  GetAllPropertiesResponse
} from '@/services/property-service/types'
import axios from 'axios'

export const propertyService = {
  createOne: async (values: CreatePropertyRequest) => {
    try {
      const { data } = await authApi.post('/properties', values, {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoiTEFORExPUkQiLCJleHAiOjE3MTUzNzQ2NDMsImlhdCI6MTcxNTM3MTA0MywiZW1haWwiOiJsYW5kbG9yZEBsYW5kbG9yZC5jb20ifQ.tTVL2MZR4oFcy2StgJZph5sTIrvSNltmdKTyuJo2hYc`
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
