import { Button } from '@/components/ui/button'
import { Form, FormField, FormItem, FormLabel } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import {
  PropertyFormType,
  usePropertyForm
} from '@/pages/owner/manage-properties/components/NewPropertyForm/useNewPropertyForm'
import { useMutation } from '@tanstack/react-query'
import { FC } from 'react'

type NewPropertyFormProps = {}

const NewPropertyForm: FC<NewPropertyFormProps> = () => {
  const propertyMutation = useMutation({
    mutationFn: async (values: PropertyFormType) => values,
    mutationKey: ['properties/new']
  })
  const form = usePropertyForm()

  function onSubmit(values: PropertyFormType) {
    propertyMutation.mutate(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="grid max-w-[600px] grid-cols-2 gap-4">
          <FormField
            name="name"
            control={form.control}
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel htmlFor={field.name}>Name</FormLabel>
                  <Input placeholder="Name" {...field} />
                </FormItem>
              )
            }}
          />
          <FormField
            name="description"
            control={form.control}
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel htmlFor={field.name}>Description</FormLabel>
                  <Input placeholder="Name" {...field} />
                </FormItem>
              )
            }}
          />
          <FormField
            name="image"
            control={form.control}
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel htmlFor={field.name}>Images</FormLabel>
                  <Input placeholder="Name" type="file" {...field} />
                </FormItem>
              )
            }}
          />
          <FormField
            name="location"
            control={form.control}
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel htmlFor={field.name}>Location</FormLabel>
                  <Input placeholder="Name" {...field} />
                </FormItem>
              )
            }}
          />
          <FormField
            name="price"
            control={form.control}
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel htmlFor={field.name}>Price</FormLabel>
                  <Input placeholder="Name" type="number" {...field} />
                </FormItem>
              )
            }}
          />
        </div>
        <Button type="submit" className="mt-6">
          Submit
        </Button>
      </form>
    </Form>
  )
}

export default NewPropertyForm
