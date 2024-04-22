import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'

export type Auth = {
  login: (username: string) => void
  logout: () => void
  username?: string
}

export function useAuth() {
  const { isLoading, isError } = useQuery({
    queryKey: ['getMe'],
    queryFn: async () => {
      const data = await new Promise<{
        username: string
      }>((res) => {
        setTimeout(() => {
          setUsername('user_name')

          res({
            username: 'user_name'
          })
        }, 10)
      })

      return data
    }
  })

  const [username, setUsername] = useState<string>('')

  function login(user_name: string) {
    localStorage.setItem('accessToken', 'some_token')
    setUsername(user_name)
  }

  function logout() {
    localStorage.removeItem('accessToken')
    setUsername('')
  }

  return {
    username,
    login,
    logout,
    isError,
    isLoading
  }
}
