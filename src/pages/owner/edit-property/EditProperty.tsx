import { Container, Layout } from '@/components/common'
import ErrorResult from '@/components/common/Errors/ErrorResult'
import { Skeleton } from '@/components/ui/skeleton'
import { Typography } from '@/components/ui/typography'
import NewPropertyForm from '@/pages/owner/add-new-property/components/NewPropertyForm/NewPropertyForm'
import { propertyService } from '@/services/property-service/property-service'
import { useQuery } from '@tanstack/react-query'
import { Link } from '@tanstack/react-router'
import { ChevronLeft } from 'lucide-react'
import { FC } from 'react'

type EditPropertyProps = {}

const EditProperty: FC<EditPropertyProps> = () => {
  const { isLoading, isError } = useQuery({
    queryKey: ['get-edit-property'],
    queryFn: () => propertyService.getById('12')
  })

  if (isLoading) {
    return (
      <Container className="mt-24 flex flex-col items-center justify-center gap-4">
        <Skeleton className="h-[20px] w-full" />
        <Skeleton className="h-[20px] w-full" />
        <Skeleton className="h-[20px] w-full" />
        <Skeleton className="h-[20px] w-full" />
      </Container>
    )
  }

  if (isError) {
    return <ErrorResult className="mt-24" />
  }

  return (
    <Layout>
      <Container className="mt-4 max-w-[1200px]">
        <div className="flex items-center gap-2">
          <Link to="../">
            <ChevronLeft />
          </Link>
          <Typography variant="h4">Edit property</Typography>
        </div>

        <NewPropertyForm />
      </Container>
    </Layout>
  )
}

export default EditProperty
