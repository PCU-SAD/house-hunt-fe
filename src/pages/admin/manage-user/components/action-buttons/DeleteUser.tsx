import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger
} from '@/components/ui/alert-dialog'
import { Button } from '@/components/ui/button'
import { useToast } from '@/components/ui/use-toast'
import { userService } from '@/services/user-service/user-service'
import { useMutation } from '@tanstack/react-query'
import { useNavigate } from '@tanstack/react-router'
import { AlertCircleIcon, Trash } from 'lucide-react'
import { FC, useState } from 'react'

type DeleteUserProps = {
  userEmail: string
  refetch: () => void
}

const DeleteUser: FC<DeleteUserProps> = ({ userEmail }) => {
  const navigate = useNavigate({
    from: '/manage-properties/$id'
  })
  const { toast } = useToast()
  const [open, setOpen] = useState(false)

  const handleClose = () => setOpen(false)

  const blockMutation = useMutation({
    mutationKey: ['delete-user-admin'],
    mutationFn: userService.deleteUser,
    onError: (error) => {
      toast({
        title: 'Error deleting user',
        description: error.message,
        duration: 2000,
        variant: 'destructive'
      })
    },
    onSuccess: () => {
      toast({
        title: 'User deleted successfully',
        description: userEmail,
        duration: 2000
      })

      navigate({
        to: '/admin-dashboard'
      })
    }
  })

  return (
    <>
      <AlertDialog open={open} onOpenChange={setOpen}>
        <AlertDialogTrigger asChild>
          <Button size="sm" variant="destructive">
            <Trash className="h-4 w-4" />
            Delete user
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle className="flex items-center gap-2">
              <AlertCircleIcon className="h-5 w-5 text-red-500" />
              Are you absolutely sure?
            </AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete user
              and remove data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={handleClose}>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={() => blockMutation.mutate(userEmail)}>
              Continue
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  )
}

export default DeleteUser
