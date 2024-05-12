import { Typography } from '@/components/ui/typography'
import { FC } from 'react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import VerificationForm from '@/pages/settings/account/components/VeritifactionForm/VerificationForm'

type AccountSettingsProps = {}

const AccountSettings: FC<AccountSettingsProps> = () => {
  return (
    <section>
      <div className="">
        <div className="space-y-8">
          <div>
            <Typography variant="h3">Identity Verification</Typography>
            <VerificationForm />
          </div>
          <div>
            <Typography variant="h3">Password & Security</Typography>
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
          </div>

          <div className="flex justify-end">
            <Button variant="destructive" size="sm">
              Delete Account
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AccountSettings
