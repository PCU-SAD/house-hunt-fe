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
import PasswordInputStrength from '@/pages/auth/components/PasswordInputStrength'
import { Link } from 'react-router-dom'
import PasswordInput from '../components/PasswordInput'
import { FormType, useSignupForm } from './useSignUpForm'

function SignupPage() {
  const form = useSignupForm()

  function onSubmit(values: FormType) {
    toast({
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(values, null, 2)}</code>
        </pre>
      )
    })
  }

  return (
    <div className="flex h-screen flex-col justify-center gap-10 sm:items-center">
      <div className="px-4">
        <div className="min-w-[300px] rounded-md border-2 border-border px-8 py-6 sm:w-[400px]">
          <Typography variant="h2">Sign up</Typography>

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
                        <PasswordInputStrength
                          placeholder="Enter your password"
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )
                }}
              />
              <FormField
                name="confirm_password"
                control={form.control}
                render={({ field }) => {
                  return (
                    <FormItem>
                      <FormLabel>Confirm Password</FormLabel>
                      <FormControl>
                        <PasswordInput
                          placeholder="Confirm your password"
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )
                }}
              />
              <Button type="submit" className="mt-3">
                Submit
              </Button>
            </form>

            <Typography className="mt-4 text-sm">
              Already have an account?{' '}
              <Link to="/login" className="text-blue-800 underline">
                Login
              </Link>
            </Typography>
          </Form>
        </div>
      </div>
    </div>
  )
}

export default SignupPage
