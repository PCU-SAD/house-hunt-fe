import ErrorResult from '@/components/common/Errors/ErrorResult'
import { Button } from '@/components/ui/button'
import { Form } from '@/components/ui/form'
import { Typography } from '@/components/ui/typography'
import DeleteDocument from '@/pages/settings/account/components/VerificationForm/components/DeleteDocument'
import VerificationSkeletonList from '@/pages/settings/account/components/VerificationForm/components/VerificationSkeletonList'
import DocumentFile from '@/pages/settings/account/components/VerificationForm/inputs/DocumentFile/DocumentFile'
import DocumentSelect from '@/pages/settings/account/components/VerificationForm/inputs/DocumentSelect/DocumentSelect'
import {
  defaultVerificationFormValues,
  useVerificationForm,
  VerificationFormType
} from '@/pages/settings/account/components/VerificationForm/useVerificationForm'
import { useAuthContext } from '@/providers/AuthProvider/AuthProvider'
import { userService } from '@/services/user-service/user-service'
import { useMutation, useQuery } from '@tanstack/react-query'

import { FC } from 'react'
import { toast } from 'sonner'

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
  const verifyMutation = useMutation({
    mutationKey: ['verify_account'],
    mutationFn: userService.verifyAccount,
    onSuccess: () => {
      toast.success('Document uploaded successfully', {
        description: 'We will verify your document and contact you shortly'
      })

      form.reset(defaultVerificationFormValues)

      refetch()
    },
    onError: (error: Error) => {
      toast.error('Something went wrong', {
        description: error.message
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

                  <DeleteDocument
                    document={document}
                    reloadDocuments={refetch}
                  />
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
