import { ColumnDef } from '@tanstack/react-table'
import { Settings } from 'lucide-react'

import { buttonVariants } from '@/components/ui/button'
import { DataTableColumnHeader } from '@/components/ui/table/column-header'
import { cn } from '@/lib/utils'
import { PropertyType } from '@/services/property-service/types'
import { CZK_DATE_FORMAT } from '@/utils/consts'
import { czkCurrencyFormatter } from '@/utils/czkCurrencyFormatter'
import { Link } from '@tanstack/react-router'
import { format } from 'date-fns'

export const managePropertyColumns: ColumnDef<PropertyType>[] = [
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

      return <div>{format(date, CZK_DATE_FORMAT)}</div>
    }
  },
  {
    id: 'actions',
    header: () => {
      return <div className="w-0 text-right"></div>
    },
    cell: ({ row }) => {
      const propertyId = row.original.id

      return (
        <div className="w-4 text-right">
          <Link
            className={cn(
              buttonVariants({
                size: 'icon',
                variant: 'ghost'
              })
            )}
            to={'/manage-properties/$id'}
            params={{
              id: propertyId
            }}>
            <Settings className="h-4 w-4 text-right" />
          </Link>
        </div>
      )
    }
  }
]
