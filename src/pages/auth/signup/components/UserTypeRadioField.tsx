import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { SignupFormType } from '@/pages/auth/signup/SignupForm/useSignupForm'
import { Home, UserRoundSearch } from 'lucide-react'
import { FC, ReactNode } from 'react'
import { useFormContext } from 'react-hook-form'

type UserTypeRadioFieldProps = {}

const UserTypeRadioField: FC<UserTypeRadioFieldProps> = () => {
  const form = useFormContext<SignupFormType>()

  return (
    <FormField
      control={form.control}
      name="type"
      render={({ field }) => (
        <FormItem className="flex">
          <FormLabel>I am...</FormLabel>
          <FormControl>
            <RadioGroup
              onValueChange={field.onChange}
              defaultValue={field.value}
              className="flex">
              <CustomFormItem
                value="TENANT"
                label="Tenant"
                icon={<UserRoundSearch className="h-6 w-6" />}
              />

              <CustomFormItem
                value="OWNER"
                label="Owner"
                icon={<Home className="h-6 w-6" />}
              />
            </RadioGroup>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}

function CustomFormItem({
  value,
  label,
  icon
}: {
  value: string
  label: string
  icon: ReactNode
}) {
  return (
    <FormItem className="flex flex-1 items-center">
      <FormControl>
        <RadioGroupItem value={value} className="peer sr-only" />
      </FormControl>

      <CustomFormLabel>
        <div className="mt-5 flex flex-col items-center gap-2">
          {icon}
          <p className="text-xs">{label}</p>
        </div>
      </CustomFormLabel>
    </FormItem>
  )
}

function CustomFormLabel({ children }: { children: ReactNode }) {
  return (
    <FormLabel
      className={
        'flex h-[80px] w-full cursor-pointer flex-col items-center rounded-md border-2 border-muted bg-popover hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-secondary [&:has([data-state=checked])]:border-primary'
      }>
      {children}
    </FormLabel>
  )
}

export default UserTypeRadioField
