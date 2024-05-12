import { Button } from '@/components/ui/button'
import { useToast } from '@/components/ui/use-toast'
import { useAuthContext } from '@/providers/AuthProvider/AuthProvider'
import { authService } from '@/services/auth-service/auth-service'
import { useMutation } from '@tanstack/react-query'
import { LogOut } from 'lucide-react'
import { FC } from 'react'

type LogoutProps = {}

const Logout: FC<LogoutProps> = () => {
  const { toast } = useToast()
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
      toast({
        title: 'Error',
        description: error.message,
        variant: 'destructive',
        duration: 2000
      })
    }
  })

  return (
    <Button onClick={handleLogout} loading={logoutMutation.isPending}>
      <>
        {!logoutMutation.isPending && <LogOut className="rotate-180" />}
        Log out
      </>
    </Button>
  )
}

export default Logout
