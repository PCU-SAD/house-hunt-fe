import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import MoneyInput from '@/components/ui/inputs/MoneyInput'
import { Label } from '@/components/ui/label'
import FileInput from '@/pages/owner/add-new-property/components/NewPropertyForm/components/FileInput'
import IsFurnishedInput from '@/pages/owner/add-new-property/components/NewPropertyForm/components/IsFurnishedInput'
import MoveInDateInput from '@/pages/owner/add-new-property/components/NewPropertyForm/components/MoveInDateInput'

import {
  NewPropertyFormType,
  useNewPropertyForm
} from '@/pages/owner/add-new-property/components/NewPropertyForm/useNewPropertyForm'
import { FC } from 'react'

function fileToBase64(file: File) {
  return new Promise<string>((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve((reader.result as string).split(',')[1])
    reader.onerror = (error) => reject(error)
  })
}

type NewPropertyFormProps = {}

const NewPropertyForm: FC<NewPropertyFormProps> = () => {
  const form = useNewPropertyForm()

  function onSubmit(values: NewPropertyFormType) {
    // console.log('🚀 ~ onSubmit ~ values:', values)

    const fileList = [
      values.images_1,
      values.images_2,
      values.images_3,
      values.images_4,
      values.images_5,
      values.images_6
    ].map((file: File) => {
      if (!file) return
      console.log('each file ', file)

      fileToBase64(file).then((base64String) => {
        console.log('base64String', base64String)
      })

      // const reader = new FileReader()

      // reader.onload = () => {
      //   const result = reader.result

      //   if (typeof result === 'string') {
      //     const base64String = result.split(',')[1]
      //     console.log(
      //       '🚀 ~ onSubmit ~ base64String:',
      //       base64String.slice(0, 12)
      //     )
      //   }
      // }

      // reader.readAsDataURL(file)
    })

    console.log(fileList)
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
                      <Input placeholder="Enter the floor" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )
              }}
            />
          </div>
        </div>

        <IsFurnishedInput />

        <div className="flex-1">
          <FormField
            name="type"
            control={form.control}
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Property type</FormLabel>
                  <FormControl>
                    <Input placeholder="House, apartment, etc." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )
            }}
          />
        </div>

        <div className="">
          <MoveInDateInput />
        </div>

        <MoneyInput
          name="price"
          label="Price"
          placeholder="Enter a price"
          form={form}
        />

        <div>
          <Label>Images</Label>
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
        </div>

        <Button type="submit" size="sm" className="mt-4">
          Submit
        </Button>
      </form>
    </Form>
  )
}

export default NewPropertyForm
