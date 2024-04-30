import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/sheet'
import LoginForm from '@/pages/auth/login/LoginForm/LoginForm'
import { UserIcon } from 'lucide-react'

function LoginDrawer() {
  return (
    <Sheet>
      <SheetTrigger>
        <Button variant="ghost" size="icon">
          <UserIcon className="h-4 w-4" />
        </Button>
      </SheetTrigger>
      <SheetContent className="flex w-full flex-col items-center sm:max-w-fit">
        <SheetHeader>
          <SheetTitle>Sign in</SheetTitle>
        </SheetHeader>

        <LoginForm />
      </SheetContent>
    </Sheet>
  )
}

export default LoginDrawer
