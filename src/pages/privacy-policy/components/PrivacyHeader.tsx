import { Typography } from '@/components/ui/typography'
import { FC } from 'react'

type PrivacyHeaderProps = {}

const PrivacyHeader: FC<PrivacyHeaderProps> = () => {
  return (
    <div>
      <Typography variant="h1">Privacy & Security</Typography>

      <p className="text-sm text-muted-foreground">
        We value your privacy and are committed to protecting your personal
        data. This privacy policy will inform you about how we look after your
        personal data when you visit our website and tell you about your privacy
        rights and how the law protects you.
      </p>
    </div>
  )
}

export default PrivacyHeader
