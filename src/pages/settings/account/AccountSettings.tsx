import { Typography } from '@/components/ui/typography'
import { FC } from 'react'

import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import ResetPasswordForm from '@/pages/settings/account/components/ResetPasswordForm/ResetPasswordForm'
import VerificationForm from '@/pages/settings/account/components/VerificationForm/VerificationForm'

type AccountSettingsProps = {}

const AccountSettings: FC<AccountSettingsProps> = () => {
  return (
    <section>
      <div className="">
        <div className="space-y-8">
          <div>
            <Typography variant="h3">Identity Verification</Typography>
            <Separator />
            <VerificationForm />
          </div>
          <div>
            <Typography variant="h3">Password & Security</Typography>

            <ResetPasswordForm />
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
