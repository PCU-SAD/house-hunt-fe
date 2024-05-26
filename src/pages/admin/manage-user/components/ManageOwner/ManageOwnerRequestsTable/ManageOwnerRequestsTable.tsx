import { DataTable } from '@/components/common/DataTable/data-table'
import { Skeleton } from '@/components/ui/skeleton'
import { cn } from '@/lib/utils'
import { manageOwnerRequestsColumns } from '@/pages/admin/manage-user/components/ManageOwner/ManageOwnerRequestsTable/manage-owner-reqeust-columns'
import { propertyService } from '@/services/property-service/property-service'
import { useQuery } from '@tanstack/react-query'
import { FC, useMemo } from 'react'

type ManageOwnerRequestsTableProps = {
  email: string
}

const ManageOwnerRequestsTable: FC<ManageOwnerRequestsTableProps> = ({
  email
}) => {
  const {
    data: serverData,
    isLoading,
    isError
  } = useQuery({
    queryKey: ['properties/owner', email],
    queryFn: () => propertyService.getPropertiesRequests(email)
  })

  const processedData = useMemo(() => {
    return (isLoading ? Array(10).fill({}) : serverData) ?? []
  }, [isLoading, serverData])

  const columnsMemo = useMemo(
    () =>
      isLoading
        ? manageOwnerRequestsColumns.map((column) => {
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
        : manageOwnerRequestsColumns,
    [isLoading]
  )

  return (
    <div>
      <DataTable columns={columnsMemo} data={processedData} isError={isError} />
    </div>
  )
}

export default ManageOwnerRequestsTable
