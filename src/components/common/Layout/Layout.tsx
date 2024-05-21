import { FC, ReactNode } from 'react'

import Footer from '@/components/common/Layout/Footer/Footer'

import AuthDrawer from '@/components/common/Layout/Header/AuthDrawer/AuthDrawer'
import Container from './Container'
import Header from './Header/Header'
import MobileMenu from './Header/MobileMenu/MobileMenu'
import Logo from '/logo.png'

type LayoutProps = {
  children: ReactNode
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <main className="flex min-h-screen flex-col">
      <header className="border-b">
        <Container className="flex h-[70px] items-center justify-between">
          <MobileMenu />

          <img src={Logo} className="h-10" />

          <Header />

          <AuthDrawer />
        </Container>
      </header>

      <section className="flex-grow">{children}</section>

      <Footer />
    </main>
  )
}

export default Layout
