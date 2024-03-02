import { FC, ReactNode } from 'react'
import Container from './Container'

type LayoutProps = {
  children: ReactNode
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <header className="shadow-md">
        <Container className="flex h-14 items-center justify-between">
          <h1>Header</h1>

          <ul className="flex items-center gap-4">
            <li>About</li>
            <li>About</li>
            <li>About</li>
          </ul>
        </Container>
      </header>

      <div>{children}</div>
    </div>
  )
}

export default Layout
