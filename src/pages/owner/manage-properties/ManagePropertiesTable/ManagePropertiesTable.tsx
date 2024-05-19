import { DataTable } from '@/components/common/DataTable/data-table'
import { Skeleton } from '@/components/ui/skeleton'
import { cn } from '@/lib/utils'
import { managePropertyColumns } from '@/pages/owner/manage-properties/ManagePropertiesTable/manage-properties-columns'
import { useAuthContext } from '@/providers/AuthProvider/AuthProvider'
import { propertyService } from '@/services/property-service/property-service'
import { useQuery } from '@tanstack/react-query'
import { FC, useMemo } from 'react'

type PropertiesTableProps = {}

const ManagePropertiesTable: FC<PropertiesTableProps> = () => {
  const { user } = useAuthContext()

  const {
    data: serverData,
    isLoading,
    isError
  } = useQuery({
    queryKey: ['properties/owner', user.email],
    queryFn: () => propertyService.getOwnerProperties(user.email)
  })

  const processedData = useMemo(() => {
    return (isLoading ? Array(10).fill({}) : serverData) ?? []
  }, [isLoading, serverData])

  const columnsMemo = useMemo(
    () =>
      isLoading
        ? managePropertyColumns.map((column) => {
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
        : managePropertyColumns,
    [isLoading]
  )

  return (
    <div>
      <DataTable columns={columnsMemo} data={processedData} isError={isError} />
    </div>
  )
}

export default ManagePropertiesTable
