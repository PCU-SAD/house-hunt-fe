import { queryClient } from '@/app'
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
import { Typography } from '@/components/ui/typography'
import { toast } from '@/components/ui/use-toast'
import {
  LoginFormType,
  useLoginForm
} from '@/pages/auth/login/LoginForm/useLoginForm'
import { authService } from '@/services/auth-service'
import { useMutation } from '@tanstack/react-query'
import {
  Link,
  useNavigate,
  useRouteContext,
  useRouter,
  useSearch
} from '@tanstack/react-router'
import { useLayoutEffect } from 'react'

function LoginForm() {
  const navigate = useNavigate()
  const router = useRouter()
  const search = useSearch({
    from: '/login'
  })

  const { auth } = useRouteContext({
    from: '/login'
  })

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
        to: search.redirect || '/protected'
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

  // Subtle nuances of client side auth. 🙄
  useLayoutEffect(() => {
    if (auth?.username && search.redirect) {
      console.log('redirecting to', search.redirect)
      router.history.push(search.redirect)
    }
  }, [auth?.username, router.history, search.redirect])

  return (
    <div className="mt-6 w-full sm:w-[400px]">
      <div className="rounded-md">
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
          <Typography className="mt-4 text-sm">
            Don't have an account yet?{' '}
            <Link to="/signup" className="text-blue-800 underline">
              Sign up
            </Link>
          </Typography>
        </Form>
      </div>
    </div>
  )
}

export default LoginForm
