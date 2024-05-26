import { Button } from '@/components/ui/button'

import { Dialog, DialogTrigger } from '@/components/ui/dialog'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { DataTableColumnHeader } from '@/components/ui/table/column-header'
import PreviewDocumentsDialogContent from '@/pages/admin/manage-user/components/ManageOwner/ManageOwnerRequestsTable/PreviewDocumentsDialog'
import { PropertyType } from '@/services/property-service/types'
import { CZK_DATE_FORMAT } from '@/utils/consts'
import { czkCurrencyFormatter } from '@/utils/czkCurrencyFormatter'
import { Link } from '@tanstack/react-router'
import { ColumnDef } from '@tanstack/react-table'
import { format } from 'date-fns'
import { Calendar, MoreHorizontal } from 'lucide-react'

export const manageOwnerRequestsColumns: ColumnDef<PropertyType>[] = [
  {
    accessorKey: 'apartmentType',
    header: 'Ap. type'
  },
  {
    accessorKey: 'adType',
    header: 'Ad type'
  },
  {
    accessorKey: 'price',
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Amount" />
    },
    enableSorting: true,
    cell: ({ row }) => {
      const price = row.original.price

      return <div>{czkCurrencyFormatter.format(price)}</div>
    }
  },
  {
    accessorKey: 'availableFrom',
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Available form" />
    },
    enableSorting: true,
    cell: ({ row }) => {
      const date = row.original.availableFrom

      return (
        <div className="flex items-center gap-2">
          <Calendar className="h-4 w-4" />
          {format(date, CZK_DATE_FORMAT)}
        </div>
      )
    }
  },
  {
    id: 'actions',
    header: () => <div className="text-right">Actions</div>,
    cell: ({ row }) => {
      const propertyId = row.original.id

      return (
        <div className="flex justify-end">
          <Dialog>
            <PreviewDocumentsDialogContent />

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-8 w-8 p-0">
                  <span className="sr-only">Open menu</span>
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Link
                    to={'/manage-properties/edit/$id'}
                    params={{
                      id: propertyId
                    }}>
                    Edit Property
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <DialogTrigger>View documents</DialogTrigger>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </Dialog>
        </div>
      )
    }
  }
]
