import { Skeleton } from '@/components/ui/skeleton'
import { cn } from '@/lib/utils'
import { columns } from '@/pages/admin/components/AdminTable/columns'
import { DataTable } from '@/pages/admin/components/AdminTable/DataTable'
import { fakePaginationResponse } from '@/pages/admin/components/AdminTable/mock-data'
import { keepPreviousData, useQuery } from '@tanstack/react-query'
import { FC, useMemo, useState } from 'react'

type AdminTableProps = {}

export type PaginationType = {
  pageIndex: number
  pageSize: number
}

const AdminTable: FC<AdminTableProps> = () => {
  const [query] = useState('')
  const [pagination, setPagination] = useState<PaginationType>({
    pageIndex: 0,
    pageSize: 10
  })

  const {
    data: serverData,
    isLoading,
    isFetching,
    isError,
    isSuccess
  } = useQuery({
    queryKey: ['admin-table', pagination.pageSize, pagination.pageIndex, query],
    queryFn: () =>
      fakePaginationResponse(pagination.pageSize, pagination.pageIndex + 1),
    placeholderData: keepPreviousData
  })

  const data = useMemo(() => {
    return (
      (isLoading ? Array(pagination.pageSize).fill({}) : serverData?.data) ?? []
    )
  }, [isLoading, pagination.pageSize, serverData?.data])

  const columnsMemo = useMemo(
    () =>
      isLoading
        ? columns.map((column) => {
            return {
              ...column,
              cell: () => (
                <div
                  className={cn('flex', {
                    'justify-end': column.id === 'actions'
                  })}
                >
                  <Skeleton className={cn('h-[18px] w-1/2')} />
                </div>
              )
            }
          })
        : columns,
    [isLoading]
  )

  return (
    <DataTable
      columns={columnsMemo}
      data={data}
      isError={isError}
      meta={{
        total: serverData?.total
      }}
      noResults={isSuccess && data?.length === 0}
      isFetching={isFetching}
      pagination={pagination}
      setPagination={setPagination}
    />
  )
}

export default AdminTable
