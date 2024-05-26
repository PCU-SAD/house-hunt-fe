import { Button } from '@/components/ui/button'
import {
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle
} from '@/components/ui/dialog'
import { adminService } from '@/services/admin-service/admin-service'
import { propertyService } from '@/services/property-service/property-service'
import { useMutation, useQuery } from '@tanstack/react-query'
import { FC } from 'react'
import { toast } from 'sonner'

type PreviewDocumentsDialogContentProps = {
  propertyId: string
}

const PreviewDocumentsDialogContent: FC<PreviewDocumentsDialogContentProps> = ({
  propertyId
}) => {
  const propertiesDocumentsQuery = useQuery({
    queryKey: ['properties/documents', propertyId],
    queryFn: () => propertyService.getPropertyDocument()
  })

  const verifyPropertyMutation = useMutation({
    mutationKey: ['verify-property'],
    mutationFn: adminService.verifyProperty,
    onSuccess: () => {
      toast.success('Property verified')
    },
    onError: (error: Error) => {
      toast.error('Something went wrong', {
        description: error.message
      })
    }
  })

  const rejectPropertyMutation = useMutation({
    mutationKey: ['reject-property'],
    mutationFn: adminService.verifyProperty,
    onSuccess: () => {
      toast.success('Property rejected')
    },
    onError: (error: Error) => {
      toast.error('Something went wrong', {
        description: error.message
      })
    }
  })

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Ownership proof</DialogTitle>
      </DialogHeader>

      <div></div>

      <DialogFooter>
        <Button
          size="sm"
          variant="outline"
          loading={verifyPropertyMutation.isPending}
          onClick={() => verifyPropertyMutation.mutate(propertyId)}>
          Verify property
        </Button>
        <Button
          size="sm"
          variant="destructive"
          loading={rejectPropertyMutation.isPending}
          onClick={() => rejectPropertyMutation.mutate(propertyId)}>
          Reject property
        </Button>
      </DialogFooter>
    </DialogContent>
  )
}

export default PreviewDocumentsDialogContent
