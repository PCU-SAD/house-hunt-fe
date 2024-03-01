import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Button } from './components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from './components/ui/form'
import { Input } from './components/ui/input'

const formSchema = z.object({
  first_name: z
    .string({
      description: 'First name'
    })
    .min(2, {
      message: 'First name must be at least 2 characters'
    }),
  last_name: z.string().min(2, {
    message: 'Last name must be at least 2 characters'
  })
})

type FormType = z.infer<typeof formSchema>

function App() {
  const form = useForm<FormType>({
    resolver: zodResolver(formSchema)
  })

  function onSubmit(values: FormType) {
    console.log(values)
  }

  return (
    <div className="flex h-screen flex-col items-center justify-center gap-10">
      <div className="min-w-[400px] rounded-md border-2 border-border px-8 py-6">
        <h2 className="border-b pb-2 text-3xl font-semibold tracking-tight">
          Form Example
        </h2>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="mt-4 flex flex-col gap-3">
            <FormField
              name="first_name"
              control={form.control}
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>First name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="First name"
                        className="min-w-16"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )
              }}
            />
            <FormField
              name="last_name"
              control={form.control}
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>Last name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Last name"
                        className="min-w-16"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )
              }}
            />
            <Button type="submit" className="mt-3">
              Submit
            </Button>
          </form>
        </Form>
      </div>
    </div>
  )
}

export default App
