import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
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
import {
  SignupFormType,
  SignupPostValues,
  useSignupForm
} from '@/pages/auth/signup/SignupForm/useSignupForm'
import { UserTypeTab } from '@/pages/auth/signup/SignupPage'
import { authService } from '@/services/auth-service'

import { Link, useNavigate } from '@tanstack/react-router'
import { ClipboardEvent, FC } from 'react'

type SignupFormProps = {
  userType: UserTypeTab
}

const SignupForm: FC<SignupFormProps> = ({ userType }) => {
  const navigate = useNavigate()
  const form = useSignupForm()

  async function onSubmit(values: SignupFormType) {
    const postValues: SignupPostValues = {
      name: values.name,
      surname: values.surname,
      phoneNumber: values.phoneNumber,
      role: userType,
      password: values.password
    }

    toast({
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">
            {JSON.stringify(postValues, null, 2)}
          </code>
        </pre>
      )
    })

    // form.reset()

    await authService.signup(postValues)

    toast({
      description: 'User created successfully',
      variant: 'default'
    })

    // navigate({
    //   to: '/login'
    // })
  }

  function onConfirmPasswordPaste(e: ClipboardEvent<HTMLInputElement>) {
    e.preventDefault()

    form.setValue('confirm_password', generateRandomString(20), {
      shouldValidate: true
    })
  }

  return (
    <Card className="px-8 py-6">
      <Link to="/" className="text-blue-800 underline">
        Visit home page
      </Link>

      <Typography variant="h2">Sign up</Typography>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="mt-4 flex flex-col gap-4">
          <FormField
            name="name"
            control={form.control}
            render={({ field }) => {
              return (
                <FormItem>
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
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your last name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )
            }}
          />

          <FormField
            control={form.control}
            name="phoneNumber"
            render={({ field }) => (
              <FormItem className="flex flex-col items-start">
                <FormLabel className="text-left">Phone Number</FormLabel>
                <FormControl className="w-full">
                  <PhoneInput
                    placeholder="Enter a phone number"
                    international
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
          <Link to="/login" className="text-blue-800 underline">
            Login
          </Link>
        </Typography>
      </Form>
    </Card>
  )
}

export default SignupForm
