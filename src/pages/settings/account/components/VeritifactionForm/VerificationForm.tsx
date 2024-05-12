import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import {
  useVerificationForm,
  VerificationFormType
} from '@/pages/settings/account/components/VeritifactionForm/useVerificationForm'
import { FC } from 'react'

type VerificationFormProps = {}

const VerificationForm: FC<VerificationFormProps> = () => {
  const form = useVerificationForm()

  function onSubmit(data: VerificationFormType) {
    console.log(data)
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="mt-4 flex items-center">
        <FormField
          name="document"
          control={form.control}
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          render={({ field: { value, onChange, ...rest } }) => {
            return (
              <FormItem>
                <FormLabel>Document</FormLabel>
                <FormControl>
                  <div className="flex items-center gap-2">
                    <Input
                      type="file"
                      placeholder="Choose a document"
                      accept="image/*"
                      {...rest}
                      onChange={(event) =>
                        onChange(event.target?.files?.[0] ?? undefined)
                      }
                    />
                    <Button type="submit" size="sm">
                      Upload
                    </Button>
                  </div>
                </FormControl>

                <FormMessage />

                <FormDescription>
                  Upload a document to verify your identity. Accepted file
                  types: JPG, PNG, PDF.
                </FormDescription>
              </FormItem>
            )
          }}
        />
      </form>
    </Form>
  )
}

export default VerificationForm
