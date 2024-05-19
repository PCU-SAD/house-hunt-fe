import PasswordInput from '@/components/common/Layout/Header/AuthDrawer/components/PasswordInput'
import PasswordInputStrength from '@/components/common/Layout/Header/AuthDrawer/components/PasswordInputStrength'
import { Button } from '@/components/ui/button'
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage
} from '@/components/ui/form'
import {
	ResetPasswordSchemaType,
	useResetPasswordForm
} from '@/pages/reset-password/components/ResetPasswordForm/useResetPassword'
import { useMutation } from '@tanstack/react-query'
import { useNavigate, useSearch } from '@tanstack/react-router'
import { FC } from 'react'
import { toast } from 'sonner'

type ResetPasswordFormProps = {}

const ResetPasswordForm: FC<ResetPasswordFormProps> = () => {
  const form = useResetPasswordForm()

	// TODO: finish request

  const { token } = useSearch({
    from: '/reset-password'
  })

  const navigate = useNavigate({
    from: '/reset-password'
  })

  const resetPasswordMutation = useMutation({
    mutationKey: ['auth/resetPasswordMutation-password'],
    mutationFn: () => {},
    onSuccess: () => {
      toast.success('Password updated successfully!')

      form.reset({
        new_password: '',
        confirm_password: ''
      })
    },
    onError: (error) => {
      toast.error('Something went wrong.', {
        description: error.message
      })
    }
  })

  function onSubmit(values: ResetPasswordSchemaType) {
    console.log(values)
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="mt-4 flex max-w-[600px] flex-col gap-4">
        <FormField
          name="new_password"
          control={form.control}
          render={({ field }) => {
            return (
              <FormItem className="flex-1">
                <FormLabel>New password</FormLabel>
                <FormControl>
                  <PasswordInputStrength
                    placeholder="Enter your new password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )
          }}
        />

        <FormField
          name="confirm_password"
          control={form.control}
          render={({ field }) => {
            return (
              <FormItem className="flex-1">
                <FormLabel>Confirm password</FormLabel>
                <FormControl>
                  <PasswordInput
                    placeholder="Enter your new password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )
          }}
        />

        <Button
          loading={resetPasswordMutation.isPending}
          size="sm"
          className="mt-2 self-start">
          Reset password
        </Button>
      </form>
    </Form>
  )
}

export default ResetPasswordForm
