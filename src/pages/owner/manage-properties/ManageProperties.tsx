import { Container, Layout } from '@/components/common'
import { buttonVariants } from '@/components/ui/button'
import { Typography } from '@/components/ui/typography'
import { cn } from '@/lib/utils'
import ManagePropertiesTable from '@/pages/owner/manage-properties/ManagePropertiesTable/ManagePropertiesTable'
import { useAuthContext } from '@/providers/AuthProvider/AuthProvider'
import { Link } from '@tanstack/react-router'
import { PlusIcon } from 'lucide-react'
import { FC } from 'react'

type ManagePropertiesProps = {}

const ManageProperties: FC<ManagePropertiesProps> = () => {
  const email = useAuthContext().user?.email ?? ''

  return (
    <Layout>
      <Container className="mt-6">
        <div className="flex items-center justify-between">
          <Typography variant="h2" className="mb-4">
            Manage Properties
          </Typography>

          <Link
            to="/manage-properties/add-new"
            className={cn(
              buttonVariants({
                size: 'noSize',
                className: 'px-2 py-2',
                variant: 'outline'
              }),
              'border-none bg-green-600 text-white hover:bg-green-500 hover:text-white'
            )}>
            <PlusIcon className="h-4 w-4" />
            <span>Add new</span>
          </Link>
        </div>

        <ManagePropertiesTable email={email} />
      </Container>
    </Layout>
  )
}

export default ManageProperties
