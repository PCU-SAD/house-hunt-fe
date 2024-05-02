import LoginForm from '@/components/common/Layout/NavMenu/AuthDrawer/login/LoginForm/LoginForm'
import SignupForm from '@/components/common/Layout/NavMenu/AuthDrawer/signup/SignupForm/SignupForm'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { useAuth } from '@/providers/AuthProvider/AuthProvider'
import { UserIcon } from 'lucide-react'
import { FC, useState } from 'react'

export type AuthDrawTab = 'login' | 'signup'

const AuthDrawer: FC = () => {
  const [showMenu, setShowMenu] = useState(false)
  const [activeTab, setActiveTab] = useState<AuthDrawTab>('login')
  const auth = useAuth()
  const isLoggedIn = !!auth?.user

  console.log('🚀 ~ drawer:', auth.user)

  function handleTabChange(tab: AuthDrawTab) {
    setActiveTab(tab)
  }

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
    <div className="mt-12 flex flex-col gap-4">
      <p>Hello, {auth?.user?.email}</p>
      <Button onClick={handleLogout}>Log out</Button>
    </div>
  )

  const loggedOutContent = (
    <Tabs value={activeTab} className="mt-6 w-full sm:w-fit">
      <TabsList className="relative w-full">
        <TabsTrigger
          value="signup"
          className="relative w-full"
          onClick={() => handleTabChange('signup')}>
          Sign up
        </TabsTrigger>
        <TabsTrigger
          value="login"
          className="w-full"
          onClick={() => handleTabChange('login')}>
          Log in
        </TabsTrigger>
      </TabsList>

      <TabsContent value="login">
        <LoginForm />
      </TabsContent>

      <TabsContent value="signup">
        <SignupForm handleTabChange={handleTabChange} />
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
