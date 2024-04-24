import { FC, ReactNode } from 'react'

import Footer from '@/components/common/Layout/Footer/Footer'
import Container from './Container'
import AccountMenubar from './NavMenu/AccountMenu/AccountMenubar'
import MobileMenu from './NavMenu/MobileMenu/MobileMenu'
import NavMenu from './NavMenu/NavMenu'

type LayoutProps = {
  children?: ReactNode
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <main className="flex min-h-screen flex-col">
      <header className="shadow-md">
        <Container className="flex h-14 items-center justify-between">
          <NavMenu />

          <AccountMenubar />
          <MobileMenu />
        </Container>
      </header>

      <div className="flex-grow">{children && <div>{children}</div>}</div>

      <Footer />
    </main>
  )
}

export default Layout
