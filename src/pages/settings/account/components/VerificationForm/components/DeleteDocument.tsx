import { Button } from '@/components/ui/button'
import { toast } from '@/components/ui/use-toast'
import { userService } from '@/services/user-service/user-service'
import { useMutation } from '@tanstack/react-query'
import { Trash2Icon } from 'lucide-react'
import { FC } from 'react'

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
      toast({
        title: 'Document deleted successfully',
        duration: 2000
      })

      reloadDocuments()
    },
    onError: (error) => {
      toast({
        title: 'Error deleting document',
        description: error.message,
        variant: 'destructive',
        duration: 2000
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
