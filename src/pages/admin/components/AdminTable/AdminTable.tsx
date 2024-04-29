import { DataTable } from '@/pages/admin/components/AdminTable/DataTable'
import { fakePaginationResponse } from '@/pages/admin/components/AdminTable/mock-data'
import { useQuery } from '@tanstack/react-query'
import { ColumnDef } from '@tanstack/react-table'
import { MoreHorizontal } from 'lucide-react'
import { FC, useMemo, useState } from 'react'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { DataTableColumnHeader } from '@/components/ui/table/column-header'
import { UserData } from '@/pages/admin/components/AdminTable/mock-data'

type AdminTableProps = {}

export type PaginationType = {
  pageIndex: number
  pageSize: number
}

const AdminTable: FC<AdminTableProps> = () => {
  const [pagination, setPagination] = useState<PaginationType>({
    pageIndex: 0,
    pageSize: 10
  })

  const {
    data: serverData,
    isLoading,
    isError,
    isSuccess
  } = useQuery({
    queryKey: ['admin-table', pagination.pageSize, pagination.pageIndex],
    queryFn: () =>
      fakePaginationResponse(pagination.pageSize, pagination.pageIndex + 1)
  })

  const data = useMemo(() => {
    return (
      (isLoading ? Array(pagination.pageSize).fill({}) : serverData?.data) ?? []
    )
  }, [isLoading, pagination.pageSize, serverData?.data])

  const columns: ColumnDef<UserData>[] = [
    {
      accessorKey: 'id',
      enableSorting: true,
      header: ({ column }) => {
        return <DataTableColumnHeader column={column} title="Id" />
      }
    },
    {
      accessorKey: 'email',
      enableSorting: true,
      header: ({ column }) => {
        return <DataTableColumnHeader column={column} title="Email" />
      }
    },
    {
      accessorKey: 'status',
      enableSorting: true,
      header: ({ column }) => {
        return <DataTableColumnHeader column={column} title="Status" />
      },
      cell: ({ row }) => {
        const status = row.getValue('status').toString()

        return <div>{status}</div>
      }
    },
    {
      id: 'actions',
      header: () => <div className="text-right">Actions</div>,
      cell: ({ row }) => {
        const payment = row.original

        return (
          <div className="flex justify-end">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-8 w-8 p-0">
                  <span className="sr-only">Open menu</span>
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                <DropdownMenuItem
                  onClick={() => navigator.clipboard.writeText(payment.id)}>
                  Copy user ID
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>View user</DropdownMenuItem>
                <DropdownMenuItem>View payment details</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        )
      }
    }
  ]

  return (
    <DataTable
      columns={columns}
      data={data}
      isLoading={isLoading}
      isError={isError}
      meta={{
        total: serverData?.total
      }}
      noResults={isSuccess && data?.length === 0}
      pagination={pagination}
      setPagination={setPagination}
    />
  )
}

export default AdminTable
