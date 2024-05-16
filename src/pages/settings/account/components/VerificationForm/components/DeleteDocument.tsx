import { Button } from '@/components/ui/button'
import { userService } from '@/services/user-service/user-service'
import { useMutation } from '@tanstack/react-query'
import { Trash2Icon } from 'lucide-react'
import { FC } from 'react'
import { toast } from 'sonner'

type DeleteDocumentProps = {
  document: string
  reloadDocuments: () => void
}

const DeleteDocument: FC<DeleteDocumentProps> = ({
  document,
  reloadDocuments
}) => {
  const deleteMutation = useMutation({
    mutationKey: ['delete_document', document],
    mutationFn: userService.deleteDocument,
    onSuccess: () => {
      toast.success('Document deleted successfully')

      reloadDocuments()
    },
    onError: (error) => {
      toast.error('Error deleting document', {
        description: error.message
      })
    }
  })

  function handleDeleteDocument() {
    deleteMutation.mutate(document)
  }

  return (
    <Button
      size="noSize"
      className="p-1 py-2"
      variant="ghost"
      type="button"
      onClick={handleDeleteDocument}
      loading={deleteMutation.isPending}>
      <Trash2Icon className="h-4 text-red-500" />
    </Button>
  )
}

export default DeleteDocument
