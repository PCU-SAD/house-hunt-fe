import { Container, Layout } from '@/components/common'
import ErrorResult from '@/components/common/Errors/ErrorResult'
import NoContent from '@/components/common/Errors/NoContent'

import {
  Pagination,
  PaginationContent,
  PaginationGoFirst,
  PaginationGoLast,
  PaginationItem,
  PaginationNext,
  PaginationPrevious
} from '@/components/ui/pagination'
import {
  DrawerFilters,
  HeaderWelcome,
  PriceSort,
  PropertiesFilters,
  PropertiesList,
  PropertiesSkeletonList
} from '@/pages/properties/components'
import { propertyService } from '@/services/property-service/property-service'
import { useBreakpoint } from '@/utils/hooks/useBreakpoint'
import { keepPreviousData, useQuery } from '@tanstack/react-query'
import { useNavigate, useSearch } from '@tanstack/react-router'
import { FC, useEffect, useState } from 'react'

const PropertiesPage: FC = () => {
  const { isLg } = useBreakpoint('lg')
  const [drawerOpen, setDrawerOpen] = useState(false)

  const navigate = useNavigate({
    from: '/properties'
  })

  const queryParams = useSearch({
    from: '/properties'
  })

  const { data, isFetching, isLoading, isError, refetch } = useQuery({
    // eslint-disable-next-line @tanstack/query/exhaustive-deps
    queryKey: ['properties', queryParams.page, queryParams.sort],
    queryFn: () => propertyService.getAll(queryParams),
    placeholderData: keepPreviousData,
    retry: false
  })

  function applyFilters() {
    refetch()
  }

  const isEmpty = data?.content?.length === 0
  const isLast = data?.last
  const isFirst = data?.first
  const isMoreThanFivePages = data?.totalPages >= 5

  function handleNextPage() {
    navigate({
      search: (prev) => {
        return {
          ...prev,
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
            ...prev,
            page: prev.page - 1
          }
        } else {
          return {
            ...prev,
            page: prev.page
          }
        }
      }
    })
  }

  function handleGoLast() {
    navigate({
      search: (prev) => ({
        ...prev,
        page: data.totalPages
      })
    })
  }

  function handleGoFirst() {
    navigate({
      search: (prev) => ({
        ...prev,
        page: 1
      })
    })
  }

  useEffect(() => {
    if (isLg) {
      setDrawerOpen(false)
    }
  }, [isLg])

  return (
    <Layout>
      <HeaderWelcome />

      <Container className="mt-6 max-w-[1200px]">
        <div className="mb-2 ml-auto hidden min-w-[250px] max-w-fit lg:block">
          <PriceSort />
        </div>

        <section className="flex max-w-[1200px] flex-col items-start gap-4 overflow-auto lg:flex-row">
          <aside className="w-full lg:min-w-[350px] lg:max-w-[350px]">
            <div className="hidden rounded-lg border bg-white p-6 lg:block">
              <PropertiesFilters
                applyFilters={applyFilters}
                isFetching={isFetching}
              />
            </div>

            <div className="flex items-center justify-between lg:hidden">
              <DrawerFilters
                drawerOpen={drawerOpen}
                setDrawerOpen={setDrawerOpen}
                applyFilters={applyFilters}
              />

              <div className="lg:hidden">
                <PriceSort />
              </div>
            </div>
          </aside>

          <div className="w-full flex-grow">
            {isError ? (
              <ErrorResult className="my-[100px]" onRetry={refetch} />
            ) : isLoading ? (
              <div className="flex flex-col gap-4">
                <PropertiesSkeletonList />
              </div>
            ) : !isEmpty ? (
              <div className="flex flex-col gap-4">
                <PropertiesList properties={data.content} />
              </div>
            ) : (
              <NoContent className="md:mt-[100px]" />
            )}

            <Pagination className="mt-6">
              <PaginationContent>
                {isMoreThanFivePages && (
                  <PaginationItem>
                    <PaginationGoFirst
                      disabled={isFetching || isFirst || isError}
                      onClick={handleGoFirst}
                    />
                  </PaginationItem>
                )}
                <PaginationItem>
                  <PaginationPrevious
                    disabled={isFirst || isFetching || isError}
                    onClick={handlePreviousPage}
                  />
                </PaginationItem>

                <PaginationItem className="px-2">
                  {queryParams.page}
                </PaginationItem>

                <PaginationItem>
                  <PaginationNext
                    disabled={isLast || isFetching || isError}
                    onClick={handleNextPage}
                  />
                </PaginationItem>

                {isMoreThanFivePages && (
                  <PaginationItem>
                    <PaginationGoLast
                      disabled={isFetching || isLast || isError}
                      onClick={handleGoLast}
                    />
                  </PaginationItem>
                )}
              </PaginationContent>
            </Pagination>
          </div>
        </section>
      </Container>
    </Layout>
  )
}

export default PropertiesPage
