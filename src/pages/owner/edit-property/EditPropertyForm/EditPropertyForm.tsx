import { Button } from '@/components/ui/button'
import { Form } from '@/components/ui/form'
import {
  newPropertyFormDefaultValues,
  NewPropertyFormType
} from '@/pages/owner/add-new-property/components/NewPropertyForm/useNewPropertyForm'
import PropertyPreview from '@/pages/owner/components/PropertyPreview/PropertyPreview'
import EditPropertyFormFields from '@/pages/owner/edit-property/EditPropertyForm/components/EditPropertyFormFields/EditPropertyFormFields'
import { useEditNewPropertyForm } from '@/pages/owner/edit-property/EditPropertyForm/useEditPropertyForm'
import { useAuthContext } from '@/providers/AuthProvider/AuthProvider'
import { propertyService } from '@/services/property-service/property-service'
import { PropertyType } from '@/services/property-service/types'
import { base64ToFile } from '@/utils/base64ToFile'
import { useMutation } from '@tanstack/react-query'
import { FC, useState } from 'react'
import { toast } from 'sonner'

type EditPropertyFormProps = {
  property: PropertyType
  images: string[]
}

const EditPropertyForm: FC<EditPropertyFormProps> = ({ property, images }) => {
  const auth = useAuthContext()
  const files = images.length
    ? images.map((base64) => base64ToFile(base64, 'name'))
    : []

  const [preview, setPreview] = useState(URL.createObjectURL(files[0]))

  const form = useEditNewPropertyForm({
    title: property.title,
    description: property.description,
    address: property.address,
    numberOfRooms: property.numberOfRooms,
    floorNumber: property.floorNumber,
    adType: property.adType,
    isFurnished: property.isFurnished,
    availableFrom: new Date(property.availableFrom),
    price: property.price,
    apartmentType: property.apartmentType,
    squareMeters: property.squareMeters,
    images: files
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
    onError: (error: Error) => {
      toast.error('Something went wrong', {
        description: error.message
      })
    }
  })

  const editPropertyMutation = useMutation({
    mutationKey: ['edit-property'],
    retry: false,
    mutationFn: propertyService.updateOne,
    onSuccess: () => {
      const images = form.getValues('images').filter((image) => !!image)

      imagesMutation.mutate({
        propertyId: property.id,
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
      ).toISOString() as unknown as Date
    }

    editPropertyMutation.mutate({
      values: formattedValues,
      propertyId: property.id
    })
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="mt-4 flex flex-col-reverse items-stretch gap-4 md:flex-row md:items-start">
        <div className="flex-1">
          <EditPropertyFormFields setPreview={setPreview} />

          <Button type="submit" size="sm" className="mt-4">
            Submit
          </Button>
        </div>

        <div className="mt-[21px] flex-1">
          <PropertyPreview property={property} preview={preview} />
        </div>
      </form>
    </Form>
  )
}

export default EditPropertyForm
