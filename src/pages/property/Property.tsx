import { Container, Layout } from '@/components/common'
import ErrorResult from '@/components/common/Errors/ErrorResult'
import SkeletonCard from '@/pages/properties/components/Skeleton/SkeletonCard'
import { propertyService } from '@/services/property-service/property-service'
import { useQuery } from '@tanstack/react-query'
import { getRouteApi, Link } from '@tanstack/react-router'
import { ChevronLeft } from 'lucide-react'
import { FC } from 'react'

type PropertyProps = {}

const routeApi = getRouteApi('/properties/$id')

const Property: FC<PropertyProps> = () => {
  const { id } = routeApi.useParams()

  const { isLoading, data, isError, refetch } = useQuery({
    queryKey: ['property', id],
    queryFn: () => propertyService.getById(id),
    retry: 1
  })

  const propertyImagesQuery = useQuery({
    queryKey: ['property-image', id],
    queryFn: () => propertyService.getPropertyImages(id),
    retry: 1
  })

  console.log('propertyImagesQuery', propertyImagesQuery, data)

  if (isError) {
    return (
      <Layout>
        <Container>
          <Link to="../" className="mt-4 inline-block">
            <ChevronLeft />
          </Link>

          <ErrorResult onRetry={refetch} className="mt-8" />
        </Container>
      </Layout>
    )
  }

  return (
    <Layout>
      <Container>
        <Link to="../" className="mt-4 inline-block">
          <ChevronLeft />
        </Link>

        <div className="mt-4">{isLoading ? <SkeletonCard /> : null}</div>
      </Container>
    </Layout>
  )
}

export default Property
