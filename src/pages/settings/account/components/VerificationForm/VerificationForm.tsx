import ErrorResult from '@/components/common/Errors/ErrorResult'
import { Button } from '@/components/ui/button'
import { Form } from '@/components/ui/form'
import { Typography } from '@/components/ui/typography'
import { useToast } from '@/components/ui/use-toast'
import VerificationSkeletonList from '@/pages/settings/account/components/VerificationForm/components/VerificationSkeletonList'
import DocumentFile from '@/pages/settings/account/components/VerificationForm/inputs/DocumentFile/DocumentFile'
import DocumentSelect from '@/pages/settings/account/components/VerificationForm/inputs/DocumentSelect/DocumentSelect'
import {
  useVerificationForm,
  VerificationFormType
} from '@/pages/settings/account/components/VerificationForm/useVerificationForm'
import { useAuthContext } from '@/providers/AuthProvider/AuthProvider'
import { userService } from '@/services/user-service/user-service'
import { useMutation, useQuery } from '@tanstack/react-query'
import { Trash2Icon } from 'lucide-react'

import { FC } from 'react'

type VerificationFormProps = {}

const VerificationForm: FC<VerificationFormProps> = () => {
  const auth = useAuthContext()
  const userEmail = auth.user.email

  const {
    data: documents,
    isLoading,
    isError,
    refetch
  } = useQuery({
    queryKey: ['account_documents', userEmail],
    queryFn: () => userService.getDocuments(userEmail)
  })

  const form = useVerificationForm()
  const { toast } = useToast()

  const verifyMutation = useMutation({
    mutationKey: ['verify_account'],
    mutationFn: userService.verifyAccount,
    onSuccess: () => {
      toast({
        title: 'Document uploaded successfully',
        description: 'We will verify your document and contact you shortly',
        duration: 2000
      })
      form.reset()

      refetch()
    },
    onError: (error: Error) => {
      toast({
        title: 'Something went wrong :(',
        description: error.message,
        variant: 'destructive',
        duration: 2000
      })

      form.reset()
    }
  })

  function onSubmit(data: VerificationFormType) {
    verifyMutation.mutate(data)
  }

  if (isError) {
    return <ErrorResult onRetry={refetch} />
  }

  if (isLoading) {
    return <VerificationSkeletonList />
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="mt-4 flex flex-col gap-4">
        {documents.length > 0 && (
          <div className="mb-4">
            <Typography variant="h4">
              You have submitted the following documents:
            </Typography>

            <ul className="ml-6 list-disc [&>li]:mt-2">
              {documents.map((document) => (
                <li key={document} className="flex items-center gap-4">
                  <Button variant="link" size="noSize">
                    {document.split('_', 2)[1]}
                  </Button>

                  <Button size="noSize" className="p-1 py-2" variant="ghost">
                    <Trash2Icon className="h-4 text-red-500" />
                  </Button>
                </li>
              ))}
            </ul>
          </div>
        )}
        <div className="flex flex-col gap-2 lg:flex-row">
          <div>
            <DocumentFile />
          </div>
          <div className="min-w-[300px]">
            <DocumentSelect />
          </div>
        </div>

        <Button
          type="submit"
          size="sm"
          className="self-start"
          loading={verifyMutation.isPending}>
          Upload
        </Button>
      </form>
    </Form>
  )
}

export default VerificationForm
