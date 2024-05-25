import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import ManageOwnerPropertiesTable from '@/pages/admin/manage-user/components/ManageOwner/ManageOwnerPropertiesTable/ManageOwnerPropertiesTable'
import { FC, useState } from 'react'

type ManageOwnerProps = {
  email: string
}

type OwnerTableTab = 'properties' | 'requests'

const ManageOwner: FC<ManageOwnerProps> = ({ email }) => {
  const [activeTab, setActiveTab] = useState<OwnerTableTab>('properties')

  function handleTabChange(tab: OwnerTableTab) {
    setActiveTab(tab)
  }

  return (
    <div>
      <Tabs value={activeTab} className="mt-6 w-full">
        <TabsList className="relative w-full">
          <TabsTrigger
            value="properties"
            className="relative w-full"
            onClick={() => handleTabChange('properties')}>
            Properties
          </TabsTrigger>
          <TabsTrigger
            value="requests"
            className="w-full"
            onClick={() => handleTabChange('requests')}>
            Requests
          </TabsTrigger>
        </TabsList>

        <TabsContent value="properties">
          <ManageOwnerPropertiesTable email={email} />
        </TabsContent>

        <TabsContent value="requests">requests</TabsContent>
      </Tabs>
    </div>
  )
}

export default ManageOwner
