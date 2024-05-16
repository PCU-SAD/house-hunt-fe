import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { userService } from '@/services/user-service/user-service'
import { useQuery } from '@tanstack/react-query'
import { getRouteApi } from '@tanstack/react-router'
import { FileIcon } from 'lucide-react'
import { FC } from 'react'

type ManageUserProps = {}

const routeApi = getRouteApi('/_auth-admin/admin-dashboard/$id')

const ManageUser: FC<ManageUserProps> = () => {
  const { id } = routeApi.useParams()

  useQuery({
    queryKey: ['admin-user-management', id],
    queryFn: () => userService.getByEmail(id)
  })
  return (
    <div className="container mx-auto px-4 py-8 md:px-6 lg:px-8">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold">User Details</h1>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-1">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <Avatar>
              <AvatarImage alt="User Avatar" src="/placeholder-avatar.jpg" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-medium">johndoe@example.com</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
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
          <div className="mt-4">
            <Label htmlFor="verification">Verification Status</Label>
            <Badge variant="outline">Verified</Badge>
          </div>
          <div className="mt-4">
            <Label htmlFor="reports">Reports</Label>
            <div className="grid grid-cols-1 gap-2">
              <div className="flex items-center justify-between">
                <p>Complaint about late delivery</p>
                <Button size="sm" variant="ghost">
                  View Report
                </Button>
              </div>
              <div className="flex items-center justify-between">
                <p>Complaint about rude customer service</p>
                <Button size="sm" variant="ghost">
                  View Report
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ManageUser
