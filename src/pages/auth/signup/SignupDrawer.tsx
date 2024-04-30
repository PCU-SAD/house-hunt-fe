import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/sheet'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import SignupForm from '@/pages/auth/signup/SignupForm/SignupForm'
import { useState } from 'react'

export type UserTypeTab = 'TENANT' | 'OWNER'

function SignupDrawer() {
  const [userTypeTab, setUserTypeTab] = useState<UserTypeTab>('TENANT')

  function handleOwnerTabClick() {
    setUserTypeTab('OWNER')
  }

  function handleTenantTabClick() {
    setUserTypeTab('TENANT')
  }

  return (
    <Sheet defaultOpen>
      <SheetTrigger>Open</SheetTrigger>
      <SheetContent className="flex w-full flex-col items-center sm:max-w-fit">
        <SheetHeader>
          <SheetTitle>Sign up</SheetTitle>
        </SheetHeader>

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
      </SheetContent>
    </Sheet>
  )
}

export default SignupDrawer
