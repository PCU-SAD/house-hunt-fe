import { Button } from '@/components/ui/button'
import { Form } from '@/components/ui/form'
import NewPropertyFormFields from '@/pages/owner/add-new-property/components/NewPropertyForm/components/inputs/NewPropertyFormFields'
import NewPropertyPreview from '@/pages/owner/add-new-property/components/NewPropertyForm/components/NewPropertyPreview/NewPropertyPreview'
import {
  newPropertyFormDefaultValues,
  NewPropertyFormType,
  useNewPropertyForm
} from '@/pages/owner/add-new-property/components/NewPropertyForm/useNewPropertyForm'
import { useAuthContext } from '@/providers/AuthProvider/AuthProvider'
import { propertyService } from '@/services/property-service/property-service'
import { useMutation } from '@tanstack/react-query'
import { FC, useState } from 'react'
import { toast } from 'sonner'

type NewPropertyFormProps = {}

const NewPropertyForm: FC<NewPropertyFormProps> = () => {
  const form = useNewPropertyForm()
  const [preview, setPreview] = useState('')

  const property = form.watch()

  const auth = useAuthContext()

  const deleteImageMutation = useMutation({
    mutationKey: ['deleteImage'],
    mutationFn: (propertyId: string) =>
      propertyService.deleteImages(propertyId),
    onError: () => {
      toast.error('Something went wrong')
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
      toast.success('Property created')

      form.reset(newPropertyFormDefaultValues)
    },
    onError: (error: Error, data) => {
      toast.error('Something went wrong', {
        description: error.message
      })

      deleteImageMutation.mutate(data.propertyId)
    }
  })

  const newPropertyMutation = useMutation({
    mutationKey: ['newProperty'],
    retry: false,
    mutationFn: propertyService.createOne,
    onSuccess: (data) => {
      const images = form.getValues('images').filter((image) => !!image)

      imagesMutation.mutate({
        propertyId: data,
        images
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
    const { images, ...rest } = values

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
          <NewPropertyFormFields setPreview={setPreview} />

          <Button type="submit" size="sm" className="mt-4">
            Submit
          </Button>
        </div>

        <div className="mt-[21px] flex-1">
          <NewPropertyPreview property={property} preview={preview} />
        </div>
      </form>
    </Form>
  )
}

export default NewPropertyForm
