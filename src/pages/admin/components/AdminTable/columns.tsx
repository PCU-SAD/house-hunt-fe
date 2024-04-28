import { ColumnDef } from '@tanstack/react-table'
import { MoreHorizontal } from 'lucide-react'

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

export type Payment = {
  id: string
  status: 'pending' | 'processing' | 'success' | 'failed'
  email: string
}

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: 'status',
    enableSorting: false,
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Status" />
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
                Copy payment ID
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>View customer</DropdownMenuItem>
              <DropdownMenuItem>View payment details</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      )
    }
  }
]
