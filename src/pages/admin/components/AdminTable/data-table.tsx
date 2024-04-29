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
import { Dispatch, SetStateAction, useMemo, useState } from 'react'

type DataTableProps = {
  columns: ColumnDef<UserData>[]
  data: UserData[]
  isLoading: boolean
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
  noResults
}: DataTableProps) {
  const [sorting, setSorting] = useState<SortingState>([])

  const columnsMemo = useMemo(
    () =>
      isLoading
        ? columns.map((column) => {
            console.log(column)
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
      <pre>
        <code>
          {JSON.stringify(
            {
              sorting,
              pagination
            },
            null,
            2
          )}
        </code>
      </pre>
      <div className="rounded-md border">
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
            {table.getRowModel().rows?.length &&
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
      </div>
      <DataTablePagination
        table={table}
        setPagination={setPagination}
        pagination={pagination}
      />
    </div>
  )
}
