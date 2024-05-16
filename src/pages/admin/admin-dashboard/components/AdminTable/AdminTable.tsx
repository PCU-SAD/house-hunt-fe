import { DataTable } from '@/components/common/DataTable/data-table'
import { Skeleton } from '@/components/ui/skeleton'
import { cn } from '@/lib/utils'
import { adminColumns } from '@/pages/admin/admin-dashboard/components/AdminTable/admin-columns'
import { keepPreviousData, useQuery } from '@tanstack/react-query'
import { FC, useMemo } from 'react'

type AdminTableProps = {}

export type PaginationType = {
  pageIndex: number
  pageSize: number
}

const AdminTable: FC<AdminTableProps> = () => {
  const {
    data: serverData,
    isLoading,
    isError
  } = useQuery({
    queryKey: ['admin-table'],
    queryFn: () => {
      return {
        data: [],
        pagination: {
          pageIndex: 0,
          pageSize: 10
        }
      }
    },
    placeholderData: keepPreviousData
  })

  const processedData = useMemo(() => {
    return (isLoading ? Array(10).fill({}) : serverData.data) ?? []
  }, [isLoading, serverData])

  const columnsMemo = useMemo(
    () =>
      isLoading
        ? adminColumns.map((column) => {
            return {
              ...column,
              cell: () => (
                <div
                  className={cn('flex', {
                    'justify-end': column.id === 'actions'
                  })}>
                  <Skeleton className={cn('h-[18px] w-1/2')} />
                </div>
              )
            }
          })
        : adminColumns,
    [isLoading]
  )

  return (
    <DataTable columns={columnsMemo} data={processedData} isError={isError} />
  )
}

export default AdminTable
