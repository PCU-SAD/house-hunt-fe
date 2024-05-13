import { Container, Layout } from '@/components/common'
import ErrorResult from '@/components/common/Errors/ErrorResult'
import NoContent from '@/components/common/Errors/NoContent'
import { Button } from '@/components/ui/button'
import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger
} from '@/components/ui/drawer'
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationNext,
  PaginationPrevious
} from '@/components/ui/pagination'
import HeaderWelcome from '@/pages/properties/components/HeaderWelcome/HeaderWelcome'
import PropertiesFilters from '@/pages/properties/components/PropertiesFilters/PropertiesFilters'
import PropertiesList from '@/pages/properties/components/PropertiesList/PropertiesList'
import PropertiesSkeletonList from '@/pages/properties/components/Skeleton/PropertiesSkeletonList'
import { propertyService } from '@/services/property-service/property-service'

import { useQuery } from '@tanstack/react-query'
import { useNavigate, useSearch } from '@tanstack/react-router'
import { FC } from 'react'

const PAGE_SIZE = 20

const PropertiesPage: FC = () => {
  const navigate = useNavigate({
    from: '/properties'
  })

  const { page } = useSearch({
    from: '/properties'
  })

  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ['properties', PAGE_SIZE, page],
    queryFn: () =>
      propertyService.getAll({
        pageSize: PAGE_SIZE,
        page: page || 1
      }),
    retry: false
  })

  const isEmpty = data?.content?.length === 0

  // 120 - total number of properties
  const totalPages = Math.ceil(120 / PAGE_SIZE)
  const currentPage = page || 1

  const pageRange = 2
  const startPage = Math.max(1, currentPage - pageRange)
  const endPage = Math.min(totalPages, currentPage + pageRange)

  const visiblePages = Array.from(
    { length: endPage - startPage + 1 },
    (_, index) => startPage + index
  )

  const showEllipsisLeft = startPage > 1
  const showEllipsisRight = endPage < totalPages

  function handleNextPage() {
    navigate({
      search: (prev) => {
        return {
          page: prev.page + 1
        }
      }
    })
  }

  function handlePreviousPage() {
    navigate({
      search: (prev) => {
        if (prev.page > 1) {
          return {
            page: prev.page - 1
          }
        } else {
          return {
            page: prev.page
          }
        }
      }
    })
  }

  function handleGoToPage(page: number) {
    navigate({
      search: {
        page
      }
    })
  }

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
      <HeaderWelcome />

      <Container className="mt-6">
        <section className="relative mx-auto flex max-w-[1200px] flex-col items-start gap-4 overflow-auto lg:flex-row">
          <aside className="min-w-[350px]">
            <div className="hidden rounded-lg border bg-white p-6 lg:block">
              <PropertiesFilters />
            </div>

            <div className="lg:hidden">
              <Drawer>
                <DrawerTrigger>Filters drawer</DrawerTrigger>
                <DrawerContent>
                  <DrawerHeader>
                    <DrawerTitle>Filters</DrawerTitle>
                  </DrawerHeader>
                  <DrawerFooter>
                    <PropertiesFilters />
                  </DrawerFooter>
                </DrawerContent>
              </Drawer>
            </div>
          </aside>

          <div>
            {isLoading ? (
              <PropertiesSkeletonList />
            ) : !isEmpty ? (
              <div className="flex flex-col gap-4">
                <PropertiesList properties={data.content} />{' '}
              </div>
            ) : (
              <NoContent className="mt-[100px]" />
            )}
          </div>
        </section>

        {/* TODO: pagination button logic */}
        <Pagination className="mt-6">
          <PaginationContent>
            <PaginationItem onClick={handlePreviousPage}>
              <PaginationPrevious />
            </PaginationItem>

            {showEllipsisLeft && (
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
            )}

            {visiblePages.map((pageNumber) => (
              <PaginationItem
                key={pageNumber}
                onClick={() => handleGoToPage(pageNumber)}>
                <Button
                  variant={pageNumber === currentPage ? undefined : 'ghost'}
                  onClick={() => navigate({ search: { page: pageNumber } })}>
                  {pageNumber}
                </Button>
              </PaginationItem>
            ))}

            {showEllipsisRight && (
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
            )}

            <PaginationItem onClick={handleNextPage}>
              <PaginationNext />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </Container>
    </Layout>
  )
}

export default PropertiesPage
