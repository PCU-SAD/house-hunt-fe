import { Container, Layout } from '@/components/common'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Typography } from '@/components/ui/typography'
import { Link } from '@tanstack/react-router'
import { PlusIcon } from 'lucide-react'
import { FC } from 'react'

type ManagePropertiesProps = {}

const properties = [
  {
    id: 1,
    name: 'Property 1',
    address: '123 Main St',
    city: 'City 1',
    state: 'State 1',
    zip: '12345'
  },
  {
    id: 2,
    name: 'Property 2',
    address: '456 Elm St',
    city: 'City 2',
    state: 'State 2',
    zip: '67890'
  }
]

const ManageProperties: FC<ManagePropertiesProps> = () => {
  return (
    <Layout>
      <Container className="mt-6">
        <div className="flex items-center justify-between">
          <Typography variant="h2" className="mb-4">
            Manage Properties
          </Typography>

          <Button size="noSize" className="gap-2 px-2 py-2" asChild>
            <Link to="/manage-properties/add-new">
              <PlusIcon className="h-4 w-4" />
              <span>Add new</span>
            </Link>
          </Button>
        </div>

        {properties.map((property) => (
          <Card key={property.id} className="mb-4 border p-4">
            <Typography variant="h3">{property.name}</Typography>
            <Typography>{property.address}</Typography>
            <Typography>
              {property.city}, {property.state} {property.zip}
            </Typography>
          </Card>
        ))}
      </Container>
    </Layout>
  )
}

export default ManageProperties
