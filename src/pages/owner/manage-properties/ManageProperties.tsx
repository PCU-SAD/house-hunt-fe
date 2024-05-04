import { Container, Layout } from '@/components/common'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Typography } from '@/components/ui/typography'
import NewPropertyForm from '@/pages/owner/manage-properties/components/NewPropertyForm/NewPropertyForm'
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
  // Add more properties as needed
]

const ManageProperties: FC<ManagePropertiesProps> = () => {
  return (
    <Layout>
      <Container>
        <div className="flex items-center justify-between">
          <Typography variant="h2" className="mb-4">
            Manage Properties
          </Typography>

          <Button size="noSize" className="gap-2 px-2 py-2">
            <PlusIcon className="h-4 w-4" />
            <span>Add new</span>
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

        <div>
          {/* <Typography variant="h3" className="mb-4">
            Add new property
          </Typography> */}

          {/* <NewPropertyForm /> */}
        </div>
      </Container>
    </Layout>
  )
}

export default ManageProperties
