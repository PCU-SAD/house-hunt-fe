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
import { FilterIcon } from 'lucide-react'
import { FC, useState } from 'react'

const PropertiesPage: FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false)

  const handleCloseDrawer = () => setDrawerOpen(false)

  const navigate = useNavigate({
    from: '/properties'
  })

  const queryParams = useSearch({
    from: '/properties'
  })

  const { data, isFetching, isError, refetch } = useQuery({
    // eslint-disable-next-line @tanstack/query/exhaustive-deps
    queryKey: ['properties'],
    queryFn: () => propertyService.getAll(queryParams),
    retry: false
  })

  function applyFilters() {
    refetch()
  }

  const isEmpty = data?.content?.length === 0

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
        <section className="flex max-w-[1200px] flex-col items-start gap-4 overflow-auto lg:flex-row">
          <aside className="min-w-[350px]">
            <div className="hidden rounded-lg border bg-white p-6 lg:block">
              <PropertiesFilters applyFilters={applyFilters} isFetching={isFetching} />
            </div>

            <div className="lg:hidden">
              <Drawer open={drawerOpen} onOpenChange={setDrawerOpen}>
                <DrawerTrigger>
                  <Button size="icon" variant="ghost">
                    <FilterIcon />
                  </Button>
                </DrawerTrigger>
                <DrawerContent>
                  <DrawerHeader>
                    <DrawerTitle>Filters</DrawerTitle>
                  </DrawerHeader>
                  <DrawerFooter>
                    <PropertiesFilters
                      applyFilters={applyFilters}
                      handleCloseDrawer={handleCloseDrawer}
                    />
                  </DrawerFooter>
                </DrawerContent>
              </Drawer>
            </div>
          </aside>

          <div className="w-full flex-grow">
            {isFetching ? (
              <PropertiesSkeletonList />
            ) : !isEmpty ? (
              <div className="flex flex-col gap-4">
                <PropertiesList properties={data.content} />{' '}
              </div>
            ) : (
              <NoContent className="md:mt-[100px]" />
            )}
          </div>
        </section>

        {/* TODO: pagination button logic */}
        <Pagination className="mt-6">
          <PaginationContent>
            <PaginationItem onClick={handlePreviousPage}>
              <PaginationPrevious />
            </PaginationItem>

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
