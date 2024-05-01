import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/sheet'
import SignupForm from '@/pages/auth/signup/SignupForm/SignupForm'

function SignupDrawer() {
  return (
    <Sheet defaultOpen>
      <SheetTrigger>Open</SheetTrigger>
      <SheetContent className="flex w-full flex-col items-center sm:max-w-fit">
        <SheetHeader>
          <SheetTitle>Sign up</SheetTitle>
        </SheetHeader>

        <div className="mt-2">
          <SignupForm />
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default SignupDrawer
