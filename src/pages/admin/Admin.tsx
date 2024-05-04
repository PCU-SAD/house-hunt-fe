import { Container, Layout } from '@/components/common'
import { Typography } from '@/components/ui/typography'
import AdminTable from '@/pages/admin/components/AdminTable/AdminTable'
import { FC } from 'react'

type AdminProps = {}

const Admin: FC<AdminProps> = () => {
  return (
    <Layout>
      <Container>
        <Typography variant="h2" className="mb-6">
          Admin panel
        </Typography>
        <AdminTable />
      </Container>
    </Layout>
  )
}

export default Admin
