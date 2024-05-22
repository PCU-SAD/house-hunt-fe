import { Link } from "@tanstack/react-router"
import Logo from '/logo.png'
export default function Component() {
  return (
    <footer className="bg-gray-900 text-white py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex items-center justify-center md:justify-start">
          <Link className="flex items-center space-x-2" href="#">
          <img src={Logo} className="h-10" />
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          <div className="space-y-2">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-1">
              <li>
                <Link className="hover:text-gray-300 transition-colors" to="/about" >
                  About Us
                </Link>
              </li>
              <li>
                <Link className="hover:text-gray-300 transition-colors" href="#">
                  Complaints
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-2">
            <h4 className="text-lg font-semibold">Contact</h4>
            <ul className="space-y-1">
              <li>
                <Link className="hover:text-gray-300 transition-colors" href="#">
                  Address
                </Link>
              </li>
              <li>
                <Link className="hover:text-gray-300 transition-colors" href="#">
                  GDPR
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-2">
            <h4 className="text-lg font-semibold">Follow Us</h4>
            <div className="flex space-x-4">
              <Link className="hover:text-gray-300 transition-colors" href="#">
                <FacebookIcon className="h-6 w-6" />
              </Link>
              <Link className="hover:text-gray-300 transition-colors" href="#">
                <TwitterIcon className="h-6 w-6" />
              </Link>
              <Link className="hover:text-gray-300 transition-colors" href="#">
                <InstagramIcon className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center text-sm text-gray-400">© 2024 House Hunt. All rights reserved.</div>
    </footer>
  )
}

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
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}


function HomeIcon(props) {
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
      strokeLinejoin="round"
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
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
      strokeLinejoin="round"
    >
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
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}