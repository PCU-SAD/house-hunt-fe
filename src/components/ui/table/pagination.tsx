import {
  ChevronLeftIcon,
  ChevronRightIcon,
  DoubleArrowLeftIcon,
  DoubleArrowRightIcon
} from '@radix-ui/react-icons'
import { PaginationState, Table } from '@tanstack/react-table'

import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { Loader2 } from 'lucide-react'
import { Dispatch, SetStateAction } from 'react'

interface DataTablePaginationProps<TData> {
  table: Table<TData>
  pagination: PaginationState
  setPagination: Dispatch<SetStateAction<PaginationState>>
  isFetching: boolean
}

export function DataTablePagination<TData>({
  table,
  pagination,
  setPagination,
  isFetching
}: DataTablePaginationProps<TData>) {
  function handleGoToFirstPage() {
    setPagination((prev) => ({ ...prev, pageIndex: 0 }))
  }

  function handleGoPrevPage() {
    setPagination((prev) => {
      if (prev.pageIndex > 0) {
        return { ...prev, pageIndex: prev.pageIndex - 1 }
      }
    })
  }

  function handleGoNextPage() {
    setPagination((prev) => {
      if (prev.pageIndex < table.getPageCount() - 1) {
        return { ...prev, pageIndex: prev.pageIndex + 1 }
      }
    })
  }

  function handleGoLastPage() {
    setPagination((prev) => ({
      ...prev,
      pageIndex: table.getPageCount() - 1
    }))
  }

  function handleChangePageSize(pageSize: string) {
    setPagination(() => ({
      pageSize: Number(pageSize),
      pageIndex: 0
    }))
  }

  return (
    <div className="px-2 py-4">
      <div className="flex items-center justify-end gap-6">
        {isFetching && (
          <Loader2 className="text-primary-500 h-6 w-6 animate-spin" />
        )}

        <div className="flex items-center gap-2">
          <p className="text-sm font-medium">Rows per page</p>
          <Select
            value={pagination.pageSize.toString()}
            disabled={isFetching}
            onValueChange={handleChangePageSize}>
            <SelectTrigger className="h-8 w-[70px]">
              <SelectValue placeholder={table.getState().pagination.pageSize} />
            </SelectTrigger>

            <SelectContent side="top">
              {[10, 20, 30, 40, 50].map((pageSize) => (
                <SelectItem key={pageSize} value={`${pageSize}`}>
                  {pageSize}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="flex gap-4">
          <div className="flex items-center justify-center text-sm font-medium">
            Page {table.getState().pagination.pageIndex + 1} of{' '}
            {table.getPageCount()}
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              className="hidden h-8 w-8 p-0 lg:flex"
              onClick={handleGoToFirstPage}
              disabled={!table.getCanPreviousPage() || isFetching}>
              <span className="sr-only">Go to first page</span>
              <DoubleArrowLeftIcon className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              className="h-8 w-8 p-0"
              onClick={handleGoPrevPage}
              disabled={!table.getCanPreviousPage() || isFetching}>
              <span className="sr-only">Go to previous page</span>
              <ChevronLeftIcon className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              className="h-8 w-8 p-0"
              onClick={handleGoNextPage}
              disabled={!table.getCanNextPage() || isFetching}>
              <span className="sr-only">Go to next page</span>
              <ChevronRightIcon className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              className="hidden h-8 w-8 p-0 lg:flex"
              onClick={handleGoLastPage}
              disabled={!table.getCanNextPage() || isFetching}>
              <span className="sr-only">Go to last page</span>
              <DoubleArrowRightIcon className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
