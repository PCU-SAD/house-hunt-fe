import Container from '@/components/common/Layout/Container'
import { Link } from '@tanstack/react-router'
import { FC } from 'react'
import Logo from '/logo-white.png'

function FacebookIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

function InstagramIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}

function TwitterIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}

const Footer: FC = () => {
  return (
    <footer className="mt-12 bg-gray-900 py-12 text-white">
      <Container className="">
        <div className="flex flex-col justify-between gap-12 md:flex-row">
          <Link className="flex items-center space-x-2" to="/">
            <img src={Logo} className="h-[80px]" />
          </Link>

          <div className="grid grid-cols-2 gap-6 md:grid-cols-3">
            <div className="space-y-2">
              <h4 className="text-md font-semibold">Quick Links</h4>
              <ul className="space-y-1">
                <li>
                  <Link
                    className="transition-colors hover:text-gray-300"
                    to="/about">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    className="transition-colors hover:text-gray-300"
                    href="#">
                    Complaints
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="text-md font-semibold">Contact</h4>
              <ul className="space-y-1">
                <li>
                  <Link
                    className="transition-colors hover:text-gray-300"
                    href="#">
                    Address
                  </Link>
                </li>
                <li>
                  <Link
                    className="transition-colors hover:text-gray-300"
                    href="#">
                    GDPR
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="text-md font-semibold">Follow Us</h4>
              <div className="flex space-x-4">
                <Link
                  className="transition-colors hover:text-gray-300"
                  href="#">
                  <FacebookIcon className="h-5 w-5" />
                </Link>
                <Link
                  className="transition-colors hover:text-gray-300"
                  href="#">
                  <TwitterIcon className="h-5 w-5" />
                </Link>
                <Link
                  className="transition-colors hover:text-gray-300"
                  href="#">
                  <InstagramIcon className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 text-center text-sm text-muted-foreground">
          © 2024 House Hunt. All rights reserved.
        </div>
      </Container>
    </footer>
  )
}

export default Footer
