import { useGetInTouchForm } from '@/components/common/GetInTouch/useGetInTouchForm'
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { FC } from 'react'
import { toast } from 'sonner'

type GetInTouchFormProps = {}

const GetInTouchForm: FC<GetInTouchFormProps> = () => {
  const form = useGetInTouchForm()

  const getInTouchMutation = useMutation({
    mutationKey: ['get-in-touch'],
    mutationFn: (data: any) =>
      axios.post('http://localhost:8080/api/v1/user/request', data),
    onSuccess: () => {
      toast.success('Your request has been successfully submitted.')
    },
    onError: () => {
      toast.error('An error occurred while submitting the request.')
    }
  })

  const onSubmit = (data: RequestFormType) => {
    getInTouchMutation.mutate(data)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )
          }}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your email"
                    inputMode="email"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )
          }}
        />

        <FormField
          name="subject"
          control={form.control}
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel>Request subject</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your request subject" />
                    </SelectTrigger>
                  </FormControl>

                  <SelectContent className="max-h-[300px]">
                    <SelectItem value="COMPLAINT">Complaint</SelectItem>
                    <SelectItem value="QUESTION">Question</SelectItem>
                    <SelectItem value="VIEWING">Viewing</SelectItem>
                  </SelectContent>
                </Select>

                <FormMessage />
              </FormItem>
            )
          }}
        />

        <FormField
          control={form.control}
          name="message"
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
        <Button
          type="submit"
          variant="outline"
          className="w-full py-3 font-semibold"
          loading={getInTouchMutation.isPending}>
          Submit
        </Button>
      </form>
    </Form>
  )
}

export default GetInTouchForm
