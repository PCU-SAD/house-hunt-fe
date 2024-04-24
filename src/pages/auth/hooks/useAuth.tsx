import { queryClient } from '@/app'
import { useQuery } from '@tanstack/react-query'

export type Auth = {
  login: (username: string) => void
  logout: () => void
  username?: string | null
}

export function useAuth() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['getMe'],
    queryFn: async () => {
      const data = await new Promise<{
        username: string
      }>((res) => {
        setTimeout(() => {
          res({
            username: 'user name'
          })
        }, 10)
      })

      return data
    }
  })

  function login(user_name: string) {
    queryClient.setQueryData(['getMe'], {
      username: user_name
    })

    localStorage.setItem('accessToken', 'some_token')
  }

  function logout() {
    localStorage.removeItem('accessToken')
    queryClient.setQueryData(['getMe'], null)
  }

  return {
    username: data?.username || null,
    login,
    logout,
    isError,
    isLoading
  }
}
