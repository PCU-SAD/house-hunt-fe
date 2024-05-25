import Logout from '@/components/common/Layout/Header/AuthDrawer/components/Logout'
import VerificationStatus from '@/components/common/Layout/Header/AuthDrawer/profile/VerificationStatus'
import { buttonVariants } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Typography } from '@/components/ui/typography'
import { cn } from '@/lib/utils'
import { useAuthDrawerContext } from '@/providers/AuthDrawerProvider/AuthDrawerProvider'
import { useAuthContext } from '@/providers/AuthProvider/AuthProvider'
import { Link } from '@tanstack/react-router'
import {
  BellIcon,
  BriefcaseIcon,
  CornerUpLeft,
  SettingsIcon,
  UserIcon
} from 'lucide-react'
import { FC } from 'react'

type ProfileProps = {}

const Profile: FC<ProfileProps> = () => {
  const { handleCloseDrawer } = useAuthDrawerContext()
  const auth = useAuthContext()

  const isOwner = auth?.user.type === 'LANDLORD'

  return (
    <div className="mt-4 flex w-full flex-1 flex-col justify-between gap-4">
      <div>
        <div className="flex items-start gap-4">
          <div className="rounded-full border p-2">
            <UserIcon className="h-5 w-5" />
          </div>

          <div>
            <p>{auth?.user?.email}</p>

            <VerificationStatus />
          </div>
        </div>

        <Link
          onClick={handleCloseDrawer}
          to="/properties"
          className={cn(
            buttonVariants({
              className: 'mt-6 h-12 w-full border',
              variant: 'ghost'
            })
          )}>
          <CornerUpLeft />
          View properties
        </Link>

        <div className="py-3"></div>

        {isOwner && (
          <>
            <Separator className="mb-4" />

            <div>
              <Typography variant="h3" className="font-normal">
                For the owner
              </Typography>

              <ul className="ml-6 mt-2 flex list-disc flex-col gap-1">
                <li>
                  <Link to="/manage-properties" onClick={handleCloseDrawer}>
                    Manage properties
                  </Link>
                </li>
              </ul>
            </div>
            <div className="py-2"></div>
          </>
        )}

        <nav className="grid gap-2">
          <Link
            className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-200"
            to="/settings/account"
            onClick={handleCloseDrawer}>
            <SettingsIcon className="h-5 w-5" />
            Profile Settings
          </Link>
          <Link
            className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-200"
            href="#">
            <BriefcaseIcon className="h-5 w-5" />
            Projects
          </Link>
          <Link
            className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-200"
            href="#">
            <UserIcon className="h-5 w-5" />
            Team
          </Link>
          <Link
            className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-200"
            href="#">
            <BellIcon className="h-5 w-5" />
            Notifications
          </Link>
        </nav>
      </div>

      <Logout />
    </div>
  )
}

export default Profile
