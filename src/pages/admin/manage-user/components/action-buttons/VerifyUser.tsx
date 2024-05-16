import { Button } from '@/components/ui/button'
import { useToast } from '@/components/ui/use-toast'
import { adminService } from '@/services/admin-service/admin-service'
import { useMutation } from '@tanstack/react-query'
import { CheckCheckIcon } from 'lucide-react'
import { FC } from 'react'

type VerifyUserProps = {
  userEmail: string
  refetch: () => void
}

const VerifyUser: FC<VerifyUserProps> = ({ userEmail, refetch }) => {
  const { toast } = useToast()

  const verifyMutation = useMutation({
    mutationKey: ['verify-user-admin'],
    mutationFn: adminService.verifyUser,
    onError: (error) => {
      toast({
        title: 'Error verifying user',
        description: error.message,
        duration: 2000,
        variant: 'destructive'
      })
    },
    onSuccess: () => {
      toast({
        title: 'User verified successfully',
        description: userEmail,
        duration: 2000
      })

      refetch()
    }
  })

  return (
    <Button
      size="sm"
      variant="outline"
      onClick={() => verifyMutation.mutate(userEmail)}>
      <CheckCheckIcon className="h-4 w-4" />
      Verify user
    </Button>
  )
}

export default VerifyUser
