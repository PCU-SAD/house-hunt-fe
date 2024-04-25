import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import SignupForm from '@/pages/auth/signup/SignupForm/SignupForm'
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
    <div className="flex h-screen flex-col items-center">
      <div className="min-w-[340px] max-w-[450px] px-4 py-4">
        <Tabs defaultValue="tenant" className="mx-auto w-full">
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
