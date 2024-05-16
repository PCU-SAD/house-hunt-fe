import { Container, Layout } from '@/components/common'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Typography } from '@/components/ui/typography'
import { userService } from '@/services/user-service/user-service'
import { useQuery } from '@tanstack/react-query'
import { getRouteApi, Link } from '@tanstack/react-router'
import {
  Ban,
  CheckCheckIcon,
  ChevronLeft,
  FileIcon,
  FileText,
  Trash
} from 'lucide-react'
import { FC } from 'react'

type ManageUserProps = {}

const routeApi = getRouteApi('/_auth-admin/admin-dashboard/$id')

const ManageUser: FC<ManageUserProps> = () => {
  const { id } = routeApi.useParams()

  const { data } = useQuery({
    queryKey: ['admin-user-management', id],
    queryFn: () => userService.getById(id)
  })

  console.log(data)

  return (
    <Layout>
      {/* <Button
        type="button"
        size="noSize"
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
      </Button> */}

      <Container>
        <div className="mx-auto mt-4 max-w-[600px]">
          <div className="mb-6 flex items-center gap-2">
            <Link to="../" className="inline-block">
              <ChevronLeft />
            </Link>
            <Typography variant="h4" className="m-0">
              User Details
            </Typography>
          </div>

          <div className="flex flex-col gap-4">
            <div className="mb-4 flex items-center gap-3">
              <Avatar>
                <AvatarImage alt="User Avatar" src="/placeholder-avatar.jpg" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium">johndoe@example.com</p>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <div>
                <Label htmlFor="email">Email</Label>
                <Input defaultValue="johndoe@example.com" id="email" readOnly />
              </div>
              <div>
                <Label htmlFor="documents">Document</Label>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">
                    <div className="flex items-center gap-2">
                      <FileIcon className="h-4 w-4" />
                      <a className="underline underline-offset-2" href="#">
                        Driver's License
                      </a>
                    </div>
                  </Badge>
                </div>
              </div>
            </div>

            <div className="mt-4 flex flex-col items-start gap-2">
              <Label htmlFor="verification">Verification Status</Label>
              <Badge variant="destructive" className="">
                Not Verified
              </Badge>
            </div>

            <div className="mt-4">
              <Label htmlFor="reports">Reports</Label>
              <div className="flex flex-col gap-2 text-sm">
                <div className="flex items-center justify-between">
                  <p>Complaint about rude customer service</p>
                  <Button size="sm" variant="outline">
                    <FileText className="h-4 w-4" />
                    View Report
                  </Button>
                </div>

                <div className="flex items-center justify-between">
                  <p>Complaint about rude customer service</p>
                  <Button size="sm" variant="outline">
                    <FileText className="h-4 w-4" />
                    View Report
                  </Button>
                </div>
              </div>
            </div>

            <div className="mt-4 flex justify-between gap-2">
              <div>
                <Button size="sm" variant="outline">
                  <CheckCheckIcon className="h-4 w-4" />
                  Verify user
                </Button>
              </div>

              <div className="flex gap-2">
                <Button size="sm" variant="destructive">
                  <Ban className="h-4 w-4" />
                  Block user
                </Button>

                <Button size="sm" variant="destructive">
                  <Trash className="h-4 w-4" />
                  Delete user
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Layout>
  )
}

export default ManageUser
