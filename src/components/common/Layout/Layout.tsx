import { FC, ReactNode } from 'react'

import Footer from '@/components/common/Layout/Footer/Footer'

import AuthDrawer from '@/components/common/Layout/NavMenu/AuthDrawers/AuthDrawer'
import Container from './Container'
import MobileMenu from './NavMenu/MobileMenu/MobileMenu'
import NavMenu from './NavMenu/NavMenu'

type LayoutProps = {
  children: ReactNode
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <main className="flex min-h-screen flex-col">
      <header className="mb-6 border-b">
        <Container className="flex h-14 items-center justify-between">
          <NavMenu />
          <MobileMenu />

          <AuthDrawer />
        </Container>
      </header>

      <div className="flex-grow">{children}</div>

      <Footer />
    </main>
  )
}

export default Layout
