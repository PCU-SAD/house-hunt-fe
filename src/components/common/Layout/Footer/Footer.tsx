import Container from '@/components/common/Layout/Container'
import { Typography } from '@/components/ui/typography'
import { InstagramLogoIcon } from '@radix-ui/react-icons'
import { FC } from 'react'
import Logo from '/logo.svg'

type FooterProps = {}

const Footer: FC<FooterProps> = () => {
  return (
    <footer className="mt-12 min-h-[300px] rounded-tl-xl rounded-tr-xl border-t bg-secondary py-8 pb-16 text-primary shadow-lg">
      <Container>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-4">
          <div>
            <img src={Logo} className="w-[80px]" />
            <Typography className="mt-6">Contacts:</Typography>
            <a href="tel:+420 749 142 849">+420 749 142 849</a>

            <ul className="mt-2 flex gap-2">
              <li>
                <a>
                  <InstagramLogoIcon className="h-5 w-5" />
                </a>
              </li>
              <li>
                <a>
                  <InstagramLogoIcon className="h-5 w-5" />
                </a>
              </li>
              <li>
                <a>
                  <InstagramLogoIcon className="h-5 w-5" />
                </a>
              </li>
              <li>
                <a>
                  <InstagramLogoIcon className="h-5 w-5" />
                </a>
              </li>
            </ul>
          </div>

          <div>
            <ul>
              <li>Link 1</li>
              <li>Link 2</li>
              <li>Link 3</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Link 4</li>
              <li>Link 5</li>
              <li>Link 6</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Link 7</li>
              <li>Link 8</li>
              <li>Link 9</li>
            </ul>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
