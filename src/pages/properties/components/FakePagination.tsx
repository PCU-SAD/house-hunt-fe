import { Button } from '@/components/ui/button'
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationNext,
  PaginationPrevious
} from '@/components/ui/pagination'
import { FC } from 'react'

// Fake data and types
interface Property {
  id: string
  title: string
}

interface PaginatedResponse {
  content: Property[]
  totalElements: number
}

const fakePaginationResponse: PaginatedResponse = {
  content: [
    { id: '1', title: 'Property 1' },
    { id: '2', title: 'Property 2' }
    // Add more fake properties as needed
  ],
  totalElements: 100
}

const PAGE_SIZE = 20

const FakePagination: FC = () => {
  const navigate = (params: { search: { page: number } }) => {
    // Fake navigation function
    console.log('Navigate to:', params)
  }

  const useSearch = () => {
    // Fake useSearch hook
    return { page: '1' }
  }

  const { page } = useSearch()

  const useQuery = () => {
    // Fake useQuery hook
    return { data: fakePaginationResponse, isLoading: false, isError: false }
  }

  const { data, isLoading, isError } = useQuery()

  const totalPages = Math.ceil(data?.totalElements / PAGE_SIZE)
  const currentPage = parseInt(page as string, 10) || 1

  const isFirstPage = currentPage === 1
  const isLastPage = currentPage === totalPages

  const pageRange = 2
  const startPage = Math.max(1, currentPage - pageRange)
  const endPage = Math.min(totalPages, currentPage + pageRange)

  const visiblePages = Array.from(
    { length: endPage - startPage + 1 },
    (_, index) => startPage + index
  )

  const showEllipsisLeft = startPage > 1
  const showEllipsisRight = endPage < totalPages

  const prevPageRange = startPage - pageRange - 1
  const nextPageRange = endPage + pageRange + 1

  function handlePreviousPage() {
    navigate({ search: { page: currentPage - 1 } })
  }

  function handleNextPage() {
    navigate({ search: { page: currentPage + 1 } })
  }

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <div>Error occurred.</div>
  }

  return (
    <div>
      {/* Render properties */}
      {data?.content.map((property) => (
        <div key={property.id}>{property.title}</div>
      ))}

      <Pagination className="mt-6">
        <PaginationContent>
          <PaginationItem onClick={handlePreviousPage}>
            <PaginationPrevious disabled={isFirstPage} />
          </PaginationItem>

          {showEllipsisLeft && (
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
          )}

          {prevPageRange > 0 && (
            <PaginationItem>
              <Button variant="ghost">{prevPageRange}</Button>
            </PaginationItem>
          )}

          {visiblePages.map((pageNumber) => (
            <PaginationItem key={pageNumber}>
              <Button
                variant={pageNumber === currentPage ? 'default' : 'ghost'}
                onClick={() => navigate({ search: { page: pageNumber } })}>
                {pageNumber}
              </Button>
            </PaginationItem>
          ))}

          {nextPageRange <= totalPages && (
            <PaginationItem>
              <Button variant="ghost">{nextPageRange}</Button>
            </PaginationItem>
          )}

          {showEllipsisRight && (
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
          )}

          <PaginationItem onClick={handleNextPage}>
            <PaginationNext disabled={isLastPage} />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  )
}

export default FakePagination
