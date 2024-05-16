import { Button } from '@/components/ui/button'
import { useAuthContext } from '@/providers/AuthProvider/AuthProvider'
import { authService } from '@/services/auth-service/auth-service'
import { useMutation } from '@tanstack/react-query'
import { LogOut as LogoutIcon } from 'lucide-react'
import { FC } from 'react'
import { toast } from 'sonner'

type LogoutProps = {}

const Logout: FC<LogoutProps> = () => {
  const auth = useAuthContext()

  function handleLogout() {
    logoutMutation.mutate()
  }

  const logoutMutation = useMutation({
    mutationKey: ['logout'],
    mutationFn: authService.logout,
    onSuccess: () => {
      auth.logout()
    },
    onError: (error) => {
      toast.error('Error', {
        description: error.message
      })
    }
  })

  return (
    <Button onClick={handleLogout} loading={logoutMutation.isPending}>
      <>
        {!logoutMutation.isPending && <LogoutIcon className="rotate-180" />}
        Log out
      </>
    </Button>
  )
}

export default Logout
