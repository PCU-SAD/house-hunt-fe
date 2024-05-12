import { Button } from '@/components/ui/button'
import { Form } from '@/components/ui/form'
import { useToast } from '@/components/ui/use-toast'
import NewPropertyFormFields from '@/pages/owner/add-new-property/components/NewPropertyForm/components/NewPropertyFormFields'
import {
  NewPropertyFormType,
  useNewPropertyForm
} from '@/pages/owner/add-new-property/components/NewPropertyForm/useNewPropertyForm'
import { useAuthContext } from '@/providers/AuthProvider/AuthProvider'
import { propertyService } from '@/services/property-service/peroperty-service'
import { useMutation } from '@tanstack/react-query'
import { FC } from 'react'

type NewPropertyFormProps = {}

const NewPropertyForm: FC<NewPropertyFormProps> = () => {
  const { toast } = useToast()
  const auth = useAuthContext()
  // console.log('🚀 ~ auth:', auth)

  const imagesMutation = useMutation({
    mutationKey: ['images'],
    mutationFn: (args: { propertyId: string; images: File[] }) =>
      propertyService.uploadImages(
        args.propertyId,
        args.images,
        auth?.accessToken
      ),
    onSuccess: () => {},
    onError: (error: Error) => {
      toast({
        title: 'Error',
        description: error.message,
        variant: 'destructive',
        duration: 2000
      })
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

      toast({
        title: 'Property created',
        description: 'Your property has been created',
        variant: 'default'
      })
    },
    onError: (error: Error) => {
      toast({
        title: 'Error',
        description: error.message,
        variant: 'destructive',
        duration: 2000
      })
    }
  })

  const form = useNewPropertyForm()

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
        className="mx-auto mt-4 flex flex-col gap-4">
        <NewPropertyFormFields />

        <Button type="submit" size="sm" className="mt-4">
          Submit
        </Button>
      </form>
    </Form>
  )
}

export default NewPropertyForm
