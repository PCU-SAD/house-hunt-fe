import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/sheet'
import LoginForm from '@/pages/auth/login/LoginForm/LoginForm'

function LoginPage() {
  return (
    <Sheet defaultOpen>
      <SheetTrigger>Open</SheetTrigger>
      <SheetContent className="flex w-full flex-col items-center sm:max-w-fit">
        <SheetHeader className="mt-6">
          <SheetTitle>Sign in</SheetTitle>
        </SheetHeader>

        <LoginForm />
      </SheetContent>
    </Sheet>
  )
}

export default LoginPage
