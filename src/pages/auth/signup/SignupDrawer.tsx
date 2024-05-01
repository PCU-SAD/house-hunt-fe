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



function SignupDrawer() {
  
  return (
    <Sheet defaultOpen>
      <SheetTrigger>Open</SheetTrigger>
      <SheetContent className="flex w-full flex-col items-center sm:max-w-fit">
        <SheetHeader>
          <SheetTitle>Sign up</SheetTitle>
        </SheetHeader>

       

          <div className="mt-2">
            <SignupForm  />
          </div>

      </SheetContent>
    </Sheet>
  )
}

export default SignupDrawer
