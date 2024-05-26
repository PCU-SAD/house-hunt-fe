import Container from '@/components/common/Layout/Container'
import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon
} from '@/components/ui/social-icons'
import { Link } from '@tanstack/react-router'
import { FC } from 'react'
import Logo from '/logo-white.png'

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
                  <a className="transition-colors hover:text-gray-300" href="#">
                    Address
                  </a>
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
                <a
                  className="transition-colors hover:text-gray-300"
                  href="https://www.facebook.com/profile.php?id=61560104906832"
                  target="_blank">
                  <FacebookIcon className="h-5 w-5" />
                </a>
                <a
                  className="transition-colors hover:text-gray-300"
                  href="https://x.com/House_Hunter24"
                  target="_blank">
                  <TwitterIcon className="h-5 w-5" />
                </a>
                <a
                  className="transition-colors hover:text-gray-300"
                  href="https://www.instagram.com/house_hunter24/"
                  target="_blank">
                  <InstagramIcon className="h-5 w-5" />
                </a>
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
