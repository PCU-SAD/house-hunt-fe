import { Container, Layout } from '@/components/common'
import { Typography } from '@/components/ui/typography'
import NewPropertyForm from '@/pages/owner/add-new-property/components/NewPropertyForm/NewPropertyForm'
import { FC } from 'react'

type AddNewPropertyProps = {}

const AddNewProperty: FC<AddNewPropertyProps> = () => {
  return (
    <Layout>
      <Container className="mt-6 max-w-[700px]">
        <Typography variant="h1">Add New Property</Typography>

        <NewPropertyForm />
      </Container>
    </Layout>
  )
}

export default AddNewProperty
