import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { PhoneInput } from '@/components/ui/phone-input'
import { Typography } from '@/components/ui/typography'
import { toast } from '@/components/ui/use-toast'
import { generateRandomString } from '@/lib/generateRandomValue'
import PasswordInput from '@/pages/auth/components/PasswordInput'
import PasswordInputStrength from '@/pages/auth/components/PasswordInputStrength'
import UserTypeRadioField from '@/pages/auth/signup/components/UserTypeRadioField'
import {
  SignupFormType,
  SignupPostValues,
  useSignupForm
} from '@/pages/auth/signup/SignupForm/useSignupForm'
import { authService } from '@/services/auth-service'
import { useMutation } from '@tanstack/react-query'

import { Link } from '@tanstack/react-router'
import { ClipboardEvent, FC } from 'react'

type SignupFormProps = {}

const SignupForm: FC<SignupFormProps> = () => {
  const form = useSignupForm()

  const signupMutation = useMutation({
    mutationFn: authService.signup,
    onSuccess: () => {
      toast({
        description: 'User created successfully',
        variant: 'default'
      })
    },
    onError: (error) => {
      toast({
        description: error.message,
        variant: 'destructive'
      })
    },
    onSettled: (_, __, values) => {
      toast({
        description: (
          <pre className="mt-2 w-full flex-1 whitespace-break-spaces rounded-md bg-slate-950 p-4">
            <code className="text-white">
              {JSON.stringify(values, null, 2)}
            </code>
          </pre>
        )
      })
    }
  })

  async function onSubmit(values: SignupFormType) {
    const postValues: SignupPostValues = {
      name: values.name,
      email: values.email,
      surname: values.surname,
      phoneNumber: values.phoneNumber,
      role: values.type,
      password: values.password
    }

    signupMutation.mutate(postValues)
  }

  function onConfirmPasswordPaste(e: ClipboardEvent<HTMLInputElement>) {
    e.preventDefault()

    form.setValue('confirm_password', generateRandomString(20), {
      shouldValidate: true
    })
  }

  return (
    <div className="mt-6 w-full sm:w-[400px]">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="mt-4 flex flex-col gap-4">
          <UserTypeRadioField />

          <div className="flex gap-2">
            <FormField
              name="name"
              control={form.control}
              render={({ field }) => {
                return (
                  <FormItem className="flex-1">
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )
              }}
            />
            <FormField
              name="surname"
              control={form.control}
              render={({ field }) => {
                return (
                  <FormItem className="flex-1">
                    <FormLabel>Last name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your last name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )
              }}
            />
          </div>

          <FormField
            control={form.control}
            name="phoneNumber"
            render={({ field }) => (
              <FormItem className="flex flex-1 flex-col items-start">
                <FormLabel className="text-left">Phone Number</FormLabel>
                <FormControl className="w-full flex-1">
                  <PhoneInput
                    placeholder="Enter a phone number"
                    defaultCountry="CZ"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

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
                  <FormMessage className="mt-2" />
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
                      {...field}
                      onPaste={onConfirmPasswordPaste}
                      placeholder="Confirm your password"
                    />
                  </FormControl>
                  <FormMessage className="mt-2" />
                </FormItem>
              )
            }}
          />

          <div className="flex flex-col gap-5">
            <FormField
              name="terms"
              control={form.control}
              render={({ field }) => {
                return (
                  <FormItem>
                    <div className="flex flex-row items-center gap-2">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>

                      <FormLabel className="leading-4">
                        Agree to terms and conditions.
                      </FormLabel>
                    </div>

                    <FormMessage />
                  </FormItem>
                )
              }}
            />
            <FormField
              name="consent"
              control={form.control}
              render={({ field }) => {
                return (
                  <FormItem>
                    <div className="flex flex-row items-center gap-2">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>

                      <FormLabel className="leading-4">
                        I consent to the processing of my personal data.
                      </FormLabel>
                    </div>

                    <FormMessage />
                  </FormItem>
                )
              }}
            />
            <FormField
              name="privacy_policy"
              control={form.control}
              render={({ field }) => {
                return (
                  <FormItem>
                    <div className="flex flex-row items-center gap-2">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>

                      <FormLabel className="leading-4">
                        I have read and agree to the privacy policy.{' '}
                        <Link to="/" className="text-blue-800 underline">
                          Privacy Policy
                        </Link>
                      </FormLabel>
                    </div>

                    <FormMessage />
                  </FormItem>
                )
              }}
            />
          </div>

          <Button type="submit" className="mt-3">
            Submit
          </Button>
        </form>

        <Typography className="mt-4 text-sm">
          Already have an account?{' '}
          <Button variant="link" className="text-blue-800 underline">
            Login
          </Button>
        </Typography>
        <Typography className="mt-2 text-sm">
          Sign up later{' '}
          <Link to="/houses" className="text-blue-800 underline">
            see all properties
          </Link>
        </Typography>
      </Form>
    </div>
  )
}

export default SignupForm
