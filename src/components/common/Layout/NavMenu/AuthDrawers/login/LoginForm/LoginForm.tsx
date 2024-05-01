import { queryClient } from '@/app'
import {
  LoginFormType,
  useLoginForm
} from '@/components/common/Layout/NavMenu/AuthDrawers/login/LoginForm/useLoginForm'
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
import { toast } from '@/components/ui/use-toast'
import { authService } from '@/services/auth-service'
import { useMutation } from '@tanstack/react-query'
import { useNavigate } from '@tanstack/react-router'

function LoginForm() {
  const navigate = useNavigate()

  const loginMutation = useMutation({
    mutationFn: authService.login,
    onSuccess: (_, values) => {
      toast({
        title: 'Login successful!',
        description: 'You have been logged in.'
      })

      queryClient.setQueryData(['getMe'], {
        username: values.email
      })

      navigate({
        to: '/houses'
      })
    },
    onError: () => {
      toast({
        variant: 'destructive',
        title: 'Uh oh! Something went wrong.',
        description:
          'There was a problem with your request. Please try again later.'
      })
    }
  })

  const form = useLoginForm()

  async function onSubmit(values: LoginFormType) {
    try {
      loginMutation.mutate(values)
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'Uh oh! Something went wrong.',
        description:
          'There was a problem with your request. Please try again later.'
      })
    }
  }

  return (
    <div className="mt-6 w-full sm:w-[400px]">
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
            name="password"
            control={form.control}
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your password" {...field} />
                  </FormControl>
                  <FormMessage className="mt-2" />
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
  )
}

export default LoginForm
