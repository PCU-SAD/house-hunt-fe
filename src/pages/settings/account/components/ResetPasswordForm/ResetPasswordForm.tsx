import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { FC } from 'react'

type ResetPasswordFormProps = {}

const ResetPasswordForm: FC<ResetPasswordFormProps> = () => {
  return (
    <div className="mt-4 space-y-4">
      <div>
        <Label htmlFor="current-password">Current Password</Label>
        <Input id="current-password" type="password" />
      </div>
      <div>
        <Label htmlFor="new-password">New Password</Label>
        <Input id="new-password" type="password" />
      </div>
      <div>
        <Label htmlFor="confirm-password">Confirm New Password</Label>
        <Input id="confirm-password" type="password" />
      </div>
      <Button>Update Password</Button>
    </div>
  )
}

export default ResetPasswordForm
