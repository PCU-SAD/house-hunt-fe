import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import SignupForm from '@/pages/auth/components/SignupForm/SignupForm'
import { useState } from 'react'

export type UserTypeTab = 'tenant' | 'owner'

function SignupPage() {
  const [userTypeTab, setUserTypeTab] = useState<UserTypeTab>('tenant')

  function handleOwnerTabClick() {
    setUserTypeTab('owner')
  }

  function handleTenantTabClick() {
    setUserTypeTab('tenant')
  }

  return (
    <div className="flex h-screen flex-col sm:items-center">
      <div className="mt-12 px-4">
        <Tabs
          defaultValue="tenant"
          className="mx-auto w-full min-w-[330px] max-w-[400px]">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="tenant" onClick={handleTenantTabClick}>
              Tenant
            </TabsTrigger>
            <TabsTrigger value="owner" onClick={handleOwnerTabClick}>
              Owner
            </TabsTrigger>
          </TabsList>

          <div className="mt-2">
            <SignupForm userType={userTypeTab} />
          </div>
        </Tabs>
      </div>
    </div>
  )
}

export default SignupPage
