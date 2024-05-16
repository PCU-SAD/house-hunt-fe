import { Button } from '@/components/ui/button'
import { useToast } from '@/components/ui/use-toast'
import { adminService } from '@/services/admin-service/admin-service'
import { useMutation } from '@tanstack/react-query'
import { Ban } from 'lucide-react'
import { FC } from 'react'

type BlockUserProps = {
  userEmail: string
  refetch: () => void
}

const BlockUser: FC<BlockUserProps> = ({ userEmail, refetch }) => {
  const { toast } = useToast()

  const blockMutation = useMutation({
    mutationKey: ['block-user-admin'],
    mutationFn: adminService.blockUser,
    onError: (error) => {
      toast({
        title: 'Error blocking user',
        description: error.message,
        duration: 2000,
        variant: 'destructive'
      })
    },
    onSuccess: () => {
      toast({
        title: 'User blocked successfully',
        description: userEmail,
        duration: 2000
      })

      refetch()
    }
  })

  return (
    <Button
      size="sm"
      variant="destructive"
      onClick={() => blockMutation.mutate(userEmail)}>
      <Ban className="h-4 w-4" />
      Block user
    </Button>
  )
}

export default BlockUser
