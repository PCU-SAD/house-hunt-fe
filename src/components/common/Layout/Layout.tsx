import { FC, ReactNode } from 'react'

import Footer from '@/components/common/Layout/Footer/Footer'
import { Button } from '@/components/ui/button'
import Container from './Container'
import AccountMenubar from './NavMenu/AccountMenu/AccountMenubar'
import MobileMenu from './NavMenu/MobileMenu/MobileMenu'
import NavMenu from './NavMenu/NavMenu'
import { UserIcon } from 'lucide-react'
import LoginDrawer from '@/pages/auth/login/LoginDrawer'

type LayoutProps = {
  children: ReactNode
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <main className="flex min-h-screen flex-col">
      <header className="mb-6 border-b">
        <Container className="flex h-14 items-center justify-between">
          <NavMenu />

         
          <LoginDrawer />
          {/* <AccountMenubar /> */}
          <MobileMenu />
        </Container>
      </header>

      <div className="flex-grow">{children}</div>

      <Footer />
    </main>
  )
}

export default Layout
