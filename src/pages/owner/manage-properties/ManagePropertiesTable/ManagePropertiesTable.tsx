import {
  columns,
  Payment
} from '@/pages/owner/manage-properties/ManagePropertiesTable/columns'
import { DataTable } from '@/pages/owner/manage-properties/ManagePropertiesTable/data-table'
import { FC } from 'react'

type PropertiesTableProps = {}

const data: Payment[] = new Array(98).fill(null).map((el, index) => ({
  id: index.toString(),
  amount: index * Math.round(Math.random()),
  status: 'pending',
  email: 'm@example.com'
}))

const ManagePropertiesTable: FC<PropertiesTableProps> = () => {
  return (
    <div>
      <DataTable columns={columns} data={data} />
    </div>
  )
}

export default ManagePropertiesTable
