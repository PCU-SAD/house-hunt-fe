import LoginForm from '@/components/common/Layout/NavMenu/AuthDrawers/login/LoginForm/LoginForm'
import SignupForm from '@/components/common/Layout/NavMenu/AuthDrawers/signup/SignupForm/SignupForm'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { useAuth } from '@/providers/AuthProvider/AuthProvider'
import { UserIcon } from 'lucide-react'
import { FC, useState } from 'react'

const AuthDrawer: FC = () => {
  const auth = useAuth()
  const isLoggedIn = !!auth?.user
  console.log('🚀 ~ auth:', auth)

  const [showMenu, setShowMenu] = useState(true)

  function handleOpen() {
    setShowMenu(true)
  }

  function handleClose() {
    setShowMenu(false)
  }

  function handleLogout() {
    auth.logout()
  }

  const loggedInContent = (
    <div>
      <p>Hello, {auth?.user}</p>
      <Button onClick={handleLogout}>Log out</Button>
    </div>
  )

  const loggedOutContent = (
    <Tabs defaultValue="signup" className="mt-6 w-full sm:w-fit">
      <TabsList className="relative w-full">
        <TabsTrigger value="signup" className="relative w-full">
          Sign up
        </TabsTrigger>
        <TabsTrigger value="login" className="w-full">
          Log in
        </TabsTrigger>
      </TabsList>

      <TabsContent value="login">
        <LoginForm />
      </TabsContent>

      <TabsContent value="signup">
        <SignupForm />
      </TabsContent>
    </Tabs>
  )

  return (
    <Sheet open={showMenu} onOpenChange={setShowMenu}>
      <SheetTrigger onClick={handleOpen}>
        <Button variant="ghost" size="icon" className="border">
          <UserIcon className="h-4 w-4" />
        </Button>
      </SheetTrigger>

      <SheetContent
        className="flex w-full flex-col items-center sm:max-w-[600px]"
        handleClose={handleClose}>
        {isLoggedIn ? loggedInContent : loggedOutContent}
      </SheetContent>
    </Sheet>
  )
}

export default AuthDrawer
