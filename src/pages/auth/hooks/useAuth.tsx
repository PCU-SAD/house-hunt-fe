import { useEffect, useState } from 'react'

export type Auth = {
  login: (username: string) => void
  logout: () => void
  username?: string
}

export function useAuth() {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [username, setUsername] = useState<string>('')

  useEffect(() => {
    async function getMe() {
      setIsLoading(true)

      const data = await new Promise<{
        username: string
      }>((res) => {
        setTimeout(() => {
          res({
            username: 'user_name'
          })
        }, 1_000)
      })

      setIsLoading(false)
      setUsername(data.username)
    }

    getMe()
  }, [])

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
    isLoading
  }
}
