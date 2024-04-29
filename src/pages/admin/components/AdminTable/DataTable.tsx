import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  PaginationState,
  SortingState,
  useReactTable
} from '@tanstack/react-table'

import { Skeleton } from '@/components/ui/skeleton'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'
import { DataTablePagination } from '@/components/ui/table/pagination'
import { cn } from '@/lib/utils'
import { UserData } from '@/pages/admin/components/AdminTable/mock-data'
import { Ban } from 'lucide-react'
import { Dispatch, SetStateAction, useMemo, useState } from 'react'

type DataTableProps = {
  columns: ColumnDef<UserData>[]
  data: UserData[]
  isLoading: boolean
  isError: boolean
  meta: {
    total: number
  }
  noResults: boolean
  pagination: PaginationState
  setPagination: Dispatch<SetStateAction<PaginationState>>
}

export function DataTable({
  columns,
  data,
  meta,
  pagination,
  setPagination,
  isLoading,
  noResults,
  isError
}: DataTableProps) {
  const [sorting, setSorting] = useState<SortingState>([])

  const columnsMemo = useMemo(
    () =>
      isLoading
        ? columns.map((column) => {
            return {
              ...column,
              cell: () => (
                <td
                  className={cn('flex', {
                    'justify-end': column.id === 'actions'
                  })}>
                  <Skeleton className={cn('h-[18px] w-1/2')} />
                </td>
              )
            }
          })
        : columns,
    [isLoading, columns]
  )

  const table = useReactTable({
    data,
    columns: columnsMemo,
    getCoreRowModel: getCoreRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),

    rowCount: meta.total,

    manualPagination: true,
    state: {
      sorting,
      pagination
    }
  })

  return (
    <div>
      <div className="rounded-md border">
        {isError ? (
          <div className="flex flex-col items-center justify-center gap-2 p-8 py-[120px] font-semibold text-red-700">
            <Ban />
            <p>Error fetching data.</p>
          </div>
        ) : (
          <Table>
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => {
                    return (
                      <TableHead key={header.id}>
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                      </TableHead>
                    )
                  })}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {table.getRowModel().rows?.length > 0 &&
                table.getRowModel().rows.map((row) => (
                  <TableRow
                    key={row.id}
                    data-state={row.getIsSelected() && 'selected'}>
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))}

              {noResults && (
                <TableRow>
                  <TableCell
                    colSpan={columns.length}
                    className="h-24 text-center">
                    No results.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        )}
      </div>

      {!isError && (
        <DataTablePagination
          table={table}
          setPagination={setPagination}
          pagination={pagination}
        />
      )}
    </div>
  )
}
