import { Container, Layout } from '@/components/common'
import ErrorResult from '@/components/common/Errors/ErrorResult'
import NoContent from '@/components/common/Errors/NoContent'
import { Button } from '@/components/ui/button'
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationNext,
  PaginationPrevious
} from '@/components/ui/pagination'
import PropertiesList from '@/pages/properties/components/PropertiesList/PropertiesList'
import SkeletonList from '@/pages/properties/components/Skeleton/SkeletonList'
import { propertyService } from '@/services/property-service/peroperty-service'
import { useQuery } from '@tanstack/react-query'
import { FC } from 'react'

const PropertiesPage: FC = () => {
  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ['properties', 'page'],
    queryFn: propertyService.getAll,
    retry: false
  })

  const isEmpty = data?.content?.length === 0

  if (isError) {
    return (
      <Layout>
        <Container>
          <ErrorResult className="mt-[100px]" onRetry={refetch} />
        </Container>
      </Layout>
    )
  }

  return (
    <Layout>
      <Container>
        <div className="px-4">
          {isLoading ? (
            <div className="grid grid-cols-1 justify-center gap-4 md:grid-cols-[minmax(300px,_400px)_minmax(300px,_400px)]">
              <SkeletonList />
            </div>
          ) : !isEmpty ? (
            <div className="grid grid-cols-1 justify-center gap-4 md:grid-cols-[minmax(300px,_400px)_minmax(300px,_400px)]">
              <PropertiesList properties={data.content} />{' '}
            </div>
          ) : (
            <NoContent />
          )}
        </div>

        {!isEmpty && (
          <Pagination className="mt-6">
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious />
              </PaginationItem>

              <PaginationItem>
                <Button variant="ghost">1</Button>
              </PaginationItem>
              <PaginationItem>
                <Button variant="ghost">2</Button>
              </PaginationItem>
              <PaginationItem>
                <Button variant="ghost">3</Button>
              </PaginationItem>

              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>

              <PaginationItem>
                <PaginationNext />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        )}
      </Container>
    </Layout>
  )
}

export default PropertiesPage
