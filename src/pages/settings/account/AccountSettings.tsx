import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Typography } from '@/components/ui/typography'
import UpdatePasswordForm from '@/pages/settings/account/components/UpdatePasswordForm/UpdatePasswordForm'
import VerificationForm from '@/pages/settings/account/components/VerificationForm/VerificationForm'
import { FC } from 'react'

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

            <UpdatePasswordForm />
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
