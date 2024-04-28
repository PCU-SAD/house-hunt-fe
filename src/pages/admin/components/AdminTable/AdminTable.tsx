import { columns, Payment } from '@/pages/admin/components/AdminTable/columns'
import { DataTable } from '@/pages/admin/components/AdminTable/data-table'
import { data } from '@/pages/admin/components/AdminTable/mock-data'
import LoadingPage from '@/pages/loading/Loading'
import { useQuery } from '@tanstack/react-query'
import { FC } from 'react'

type AdminTableProps = {}

async function getData(): Promise<Payment[]> {
  return data
}

const AdminTable: FC<AdminTableProps> = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['admin-table'],
    queryFn: getData
  })

  if (isLoading) {
    return <LoadingPage />
  }

  return <DataTable columns={columns} data={data} />
}

export default AdminTable
