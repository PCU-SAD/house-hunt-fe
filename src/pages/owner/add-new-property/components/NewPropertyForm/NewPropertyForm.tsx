import { Button } from '@/components/ui/button'
import { Form } from '@/components/ui/form'
import {
  newPropertyFormDefaultValues,
  NewPropertyFormType,
  useNewPropertyForm
} from '@/pages/owner/add-new-property/components/NewPropertyForm/useNewPropertyForm'
import NewPropertyFormFields from '@/pages/owner/components/inputs/NewPropertyFormFields'
import PropertyPreview from '@/pages/owner/components/PropertyPreview/PropertyPreview'

import { useAuthContext } from '@/providers/AuthProvider/AuthProvider'
import { propertyService } from '@/services/property-service/property-service'
import { useMutation } from '@tanstack/react-query'
import { useNavigate } from '@tanstack/react-router'
import { FC } from 'react'
import { toast } from 'sonner'

type NewPropertyFormProps = {}

const NewPropertyForm: FC<NewPropertyFormProps> = () => {
  const form = useNewPropertyForm()

  const previewImg = form.watch().images[0]
    ? URL.createObjectURL(form.watch().images[0])
    : ''

  const navigate = useNavigate({
    from: '/manage-properties/add-new'
  })

  const property = form.watch()

  const auth = useAuthContext()
  const deletePropertyMutation = useMutation({
    mutationKey: ['delete-property'],
    mutationFn: (propertyId: string) =>
      propertyService.deleteProperty(propertyId),
    onError: () => {
      toast.error('Something went wrong')
    }
  })

  const uploadDocumentMutation = useMutation({
    mutationKey: ['upload-ownership-document'],
    mutationFn: propertyService.uploadOwnershipDocument,
    onSuccess: () => {
      toast.success('Property created')

      form.reset(newPropertyFormDefaultValues)

      if (auth?.user?.type === 'ADMIN') {
        navigate({
          to: '/admin-dashboard'
        })
      } else {
        navigate({
          to: '/manage-properties'
        })
      }
    },
    onError: (error: Error, data) => {
      toast.error('Error uploading document', {
        description: error.message
      })

      deletePropertyMutation.mutate(data.propertyId)
    }
  })

 

  const imagesMutation = useMutation({
    mutationKey: ['images'],
    mutationFn: (args: { propertyId: string; images: File[] }) =>
      propertyService.uploadImages(
        args.propertyId,
        args.images,
        auth?.accessToken
      ),
    onSuccess: () => {
      console.log('images mutation done')
    },
    onError: (error: Error, data) => {
      toast.error('Something went wrong', {
        description: error.message
      })

      deletePropertyMutation.mutate(data.propertyId)
    }
  })

  const newPropertyMutation = useMutation({
    mutationKey: ['newProperty'],
    retry: false,
    mutationFn: propertyService.createOne,
    onSuccess: (data) => {
      const images = form.getValues('images').filter((image) => !!image)

      console.log('images mutation')
      imagesMutation.mutate({
        propertyId: data,
        images
      })

      console.log('upload document mutation')
      uploadDocumentMutation.mutate({
        propertyId: data,
        document: form.getValues('document'),
        accessToken: auth.accessToken
      })
    },
    onError: (error: Error) => {
      toast.error('Something went wrong', {
        description: error.message
      })
    }
  })

  function onSubmit(values: NewPropertyFormType) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { images, document, ...rest } = values

    const formattedValues = {
      ...rest,
      availableFrom: new Date(
        values.availableFrom
      ).toISOString() as unknown as Date,
      ownerEmail: auth?.user?.email
    }

    newPropertyMutation.mutate(formattedValues)
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="mt-4 flex flex-col-reverse items-stretch gap-4 md:flex-row md:items-start">
        <div className="flex-1">
          <NewPropertyFormFields />

          <Button type="submit" size="sm" className="mt-4">
            Submit
          </Button>
        </div>

        <div className="mt-[21px] flex-1">
          <PropertyPreview property={property} preview={previewImg} />
        </div>
      </form>
    </Form>
  )
}

export default NewPropertyForm
