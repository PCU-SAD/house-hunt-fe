export const authService = {
  refresh: async () => {
    try {
      const data = await new Promise<{
        accessToken: string
      }>((res) => {
        setTimeout(() => {
          res({
            accessToken: 'token'
          })
        }, 10)
      })

      return data
    } catch (error) {
      throw new Error('Not authorized')
    }
  }
}
