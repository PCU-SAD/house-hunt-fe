import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import PasswordInputControl from './components/ui/PasswordInput'
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
  email: z
    .string({
      description: 'First name'
    })
    .email({
      message: 'Invalid email format'
    }),
  password: z.string().min(2, {
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
              name="email"
              control={form.control}
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your email"
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
              name="password"
              control={form.control}
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <PasswordInputControl
                        placeholder="Enter your password"
                        className="min-w-16"
                        type="password"
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
