import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  PaginationState,
  SortingState,
  useReactTable
} from '@tanstack/react-table'

import { Input } from '@/components/ui/input'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'
import { DataTablePagination } from '@/components/ui/table/pagination'
import { UserData } from '@/pages/admin/components/AdminTable/mock-data'
import { Ban, Search } from 'lucide-react'
import { Dispatch, SetStateAction, useState } from 'react'

type DataTableProps = {
  columns: ColumnDef<UserData>[]
  data: UserData[]
  isError: boolean
  isFetching: boolean
  noResults: boolean
  pagination: PaginationState
  setPagination: Dispatch<SetStateAction<PaginationState>>
  meta: {
    total: number
  }
}

export function DataTable({
  columns,
  data,
  meta,
  pagination,
  setPagination,
  noResults,
  isError,
  isFetching
}: DataTableProps) {
  const [sorting, setSorting] = useState<SortingState>([])

  const table = useReactTable({
    data,
    columns,
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
      <div className="">
        {isError ? (
          <div className="flex flex-col items-center justify-center gap-2 p-8 py-[120px] font-semibold text-red-700">
            <Ban />
            <p>Error fetching data.</p>
          </div>
        ) : (
          <div className="">
            <div className="flex justify-end">
              <div className="md:w-[200px]">
                <Input
                  disabled={isFetching}
                  className="h-8 w-full items-end py-2"
                  placeholder="Search..."
                  icon={<Search className="h-4 w-4" />}
                />
              </div>
            </div>

            <div className="mt-4 rounded-md border">
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
                        data-state={row.getIsSelected() && 'selected'}
                      >
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
                        className="h-24 text-center"
                      >
                        No results.
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>
          </div>
        )}
      </div>

      {!isError && (
        <DataTablePagination
          table={table}
          isFetching={isFetching}
          setPagination={setPagination}
          pagination={pagination}
        />
      )}
    </div>
  )
}
