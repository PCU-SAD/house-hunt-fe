import { FC, ReactNode } from 'react'

import { CookiesDialog } from '../CookiesDialog/CookiesDialog'
import Container from './Container'
import AccountMenubar from './NavMenu/AccountMenu/AccountMenubar'
import MobileMenu from './NavMenu/MobileMenu/MobileMenu'
import NavMenu from './NavMenu/NavMenu'

type LayoutProps = {
  children?: ReactNode
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <main>
      <header className="shadow-md">
        <Container className="flex h-14 items-center justify-between">
          <NavMenu />

          <AccountMenubar />
          <MobileMenu />
        </Container>
      </header>

      <Container className="mt-4">
        <CookiesDialog />
      </Container>

      {children && <div>{children}</div>}
    </main>
  )
}

export default Layout
