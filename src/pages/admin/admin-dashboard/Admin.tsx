import { Container, Layout } from '@/components/common'
import { Button } from '@/components/ui/button'
import { Typography } from '@/components/ui/typography'
import AdminTable from '@/pages/admin/admin-dashboard/components/AdminTable/AdminTable'
import { api } from '@/providers/AuthProvider/AuthProvider'
import { FC } from 'react'

type AdminProps = {}

const Admin: FC<AdminProps> = () => {
  return (
    <Layout>
      <Container>
        <Typography variant="h2" className="mb-6">
          Admin panel
        </Typography>

        <Button
          type="button"
          onClick={async () => {
            try {
              const data = await api.get(
                '/user/documents/download/ae6cc1bf-344f-4849-a734-252ee07ba855_CL.pdf',
                {
                  headers: {
                    Accept: 'application/pdf'
                  }
                }
              )
              const blob = new Blob([data.data], { type: 'application/pdf' })
              const url = URL.createObjectURL(blob)
              const link = document.createElement('a')
              link.href = url
              link.download = 'document.pdf'
              document.body.appendChild(link)
              link.click()
              document.body.removeChild(link)
              URL.revokeObjectURL(url)
            } catch (error) {
              console.log('error', error)
            }
          }}>
          download pdf
        </Button>
        <AdminTable />
      </Container>
    </Layout>
  )
}

export default Admin
