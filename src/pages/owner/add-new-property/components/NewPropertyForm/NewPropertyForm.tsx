import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import MoneyInput from '@/components/ui/inputs/MoneyInput'
import { Textarea } from '@/components/ui/textarea'
import { useToast } from '@/components/ui/use-toast'
import ApartmentTypeSelect from '@/pages/owner/add-new-property/components/NewPropertyForm/components/ApartmentTypeSelect/ApartmentTypeSelect'
import IsFurnishedSelect from '@/pages/owner/add-new-property/components/NewPropertyForm/components/IsFurnishedSelect/IsFurnishedSelect'

import MoveInDateInput from '@/pages/owner/add-new-property/components/NewPropertyForm/components/MoveInDateInput'
import PropertyTypeSelect from '@/pages/owner/add-new-property/components/NewPropertyForm/components/PropertyTypeSelect/PropertyTypeSelect'

import {
  NewPropertyFormType,
  useNewPropertyForm
} from '@/pages/owner/add-new-property/components/NewPropertyForm/useNewPropertyForm'
import { useAuth } from '@/providers/AuthProvider/AuthProvider'
import { propertyService } from '@/services/property-service/peroperty-service'
import { useMutation } from '@tanstack/react-query'
import { FC } from 'react'

// function fileToBase64(file: File) {
//   return new Promise<string>((resolve, reject) => {
//     const reader = new FileReader()
//     reader.readAsDataURL(file)
//     reader.onload = () => resolve((reader.result as string).split(',')[1])
//     reader.onerror = (error) => reject(error)
//   })
// }

type NewPropertyFormProps = {}

const NewPropertyForm: FC<NewPropertyFormProps> = () => {
  const { toast } = useToast()
  const auth = useAuth()

  const newPropertyMutation = useMutation({
    mutationKey: ['newProperty'],
    mutationFn: propertyService.createOne,
    onSuccess: () => {
      form.reset()

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
        variant: 'destructive'
      })
    }
  })

  const form = useNewPropertyForm()

  function onSubmit(values: NewPropertyFormType) {
    const formattedValues = {
      ...values,
      availableFrom: new Date(
        values.availableFrom
      ).toISOString() as unknown as Date,
      ownerEmail: auth?.user?.email
    }
    newPropertyMutation.mutate(formattedValues)

    console.log(JSON.stringify(values, null, 2))
    // const fileList = [
    //   values.images_1,
    //   values.images_2,
    //   values.images_3,
    //   values.images_4,
    //   values.images_5,
    //   values.images_6
    // ].map((file: File) => {
    //   if (!file) return
    //   console.log('each file ', file)
    //   fileToBase64(file).then((base64String) => {
    //     console.log('base64String', base64String)
    //   })
    // })
    // console.log(fileList)
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="mx-auto mt-4 flex flex-col gap-4">
        <FormField
          name="title"
          control={form.control}
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input placeholder="Enter title" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )
          }}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Enter a description of the property"
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="address"
          control={form.control}
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel>Address</FormLabel>
                <FormControl>
                  <Input placeholder="Enter full property address" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )
          }}
        />

        <FormField
          name="numberOfRooms"
          control={form.control}
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel>Number of rooms</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter number of rooms"
                    type="number"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )
          }}
        />

        <div className="flex flex-col gap-2 md:flex-row">
          <div className="flex-1">
            <FormField
              name="squareMeters"
              control={form.control}
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>Square meters</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter properties square meters"
                        type="number"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )
              }}
            />
          </div>

          <div className="flex-1">
            <FormField
              name="floorNumber"
              control={form.control}
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>Floor</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter the floor"
                        type="number"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )
              }}
            />
          </div>
        </div>

        <IsFurnishedSelect />
        <div className="flex gap-2">
          <div className="flex-1">
            <PropertyTypeSelect />
          </div>
          <div className="flex-1">
            <ApartmentTypeSelect />
          </div>
        </div>

        <div className="flex gap-2">
          <MoveInDateInput />
          <div className="flex-1">
            <MoneyInput
              name="price"
              label="Price"
              placeholder="Enter a price"
              form={form}
            />
          </div>
        </div>

        {/* 
        <div>
          <Label className="mb-2 block">Images</Label>
          <div className="flex flex-wrap gap-2">
            <FileInput form={form} name="images_1" />
            <FileInput form={form} name="images_2" />
            <FileInput form={form} name="images_3" />
            <FileInput form={form} name="images_4" />
            <FileInput form={form} name="images_5" />
            <FileInput form={form} name="images_6" />
          </div>

          <FormDescription>You can upload up to 6 images.</FormDescription>

         {form.formState.errors.images_1 && (
            <p className="text-sm font-medium text-destructive">
              {form.formState.errors.images_1.message.toString()}
            </p>
          )} 
        </div>*/}

        <Button type="submit" size="sm" className="mt-4">
          Submit
        </Button>
      </form>
    </Form>
  )
}

export default NewPropertyForm
