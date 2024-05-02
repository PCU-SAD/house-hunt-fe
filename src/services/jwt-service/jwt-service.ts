import { UserType } from '@/providers/AuthProvider/AuthProvider'
import { jwtDecode } from 'jwt-decode'

type JWTPayload = {
  role: UserType
  email: string
  exp: number
}

export const jwtService = {
  parse: (accessToken: string): JWTPayload | null => {
    try {
      const parsedPayload = jwtDecode<JWTPayload>(accessToken)

      return parsedPayload
    } catch (error) {
      throw new Error('Invalid token')
    }
  }
}
