import PasswordInput from '@/components/common/Layout/Header/AuthDrawer/components/PasswordInput'
import {
  LoginFormType,
  useLoginForm
} from '@/components/common/Layout/Header/AuthDrawer/login/LoginForm/useLoginForm'
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
import { useToast } from '@/components/ui/use-toast'
import { useAuthContext } from '@/providers/AuthProvider/AuthProvider'
import { authService } from '@/services/auth-service/auth-service'
import { jwtService } from '@/services/jwt-service/jwt-service'
import { useMutation } from '@tanstack/react-query'

function LoginForm() {
  const { toast } = useToast()

  const auth = useAuthContext()
  const form = useLoginForm()

  const { mutate } = useMutation({
    mutationFn: authService.login,
    mutationKey: ['auth/login'],
    onSuccess: (response) => {
      const userData = jwtService.parse(response.token)

      auth.login(
        {
          email: userData.email,
          type: userData.role
        },
        response.refreshToken
      )

      toast({
        title: 'Login successful!',
        description: 'You have been logged in.',
        duration: 2_000
      })

      form.reset()
    },
    onError: (error) => {
      toast({
        variant: 'destructive',
        title: 'Uh oh! Something went wrong.',
        description: error.message,
        duration: 2_000
      })
    }
  })

  async function onSubmit(values: LoginFormType) {
    mutate(values)
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
                    <PasswordInput
                      placeholder="Enter your password"
                      {...field}
                    />
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
