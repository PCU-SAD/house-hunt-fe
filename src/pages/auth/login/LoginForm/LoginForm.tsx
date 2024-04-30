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

  const form = useLoginForm()

  async function onSubmit(values: LoginFormType) {
    try {
      toast({
        description: (
          <pre className="mt-2 w-full flex-1 whitespace-break-spaces rounded-md bg-slate-950 p-4">
            <code className="text-white">
              {JSON.stringify(values, null, 2)}
            </code>
          </pre>
        )
      })

      await authService.login(values)
      auth.login(values.email)

      if (!search.redirect) {
        navigate({
          to: '/'
        })
      }

      // form.reset()
      // router.invalidate()
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'Uh oh! Something went wrong.',
        description:
          'There was a problem with your request. Please try again later.'
      })
    }
  }

  // Ah, the subtle nuances of client side auth. 🙄
  useLayoutEffect(() => {
    if (auth?.username && search.redirect) {
      console.log('redirecting to', search.redirect)
      router.history.push(search.redirect)
    }
  }, [auth?.username, router.history, search.redirect])

  return (
    <div className="flex h-screen flex-col justify-center gap-10 sm:items-center">
      <div className="px-4">
        <div className="min-w-[300px] rounded-md border-2 border-border px-8 py-6 sm:w-[400px]">
          <Link to="/" className="text-blue-800 underline">
            Visit home page
          </Link>
          <Typography variant="h2">Login</Typography>

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
    </div>
  )
}

export default LoginForm
