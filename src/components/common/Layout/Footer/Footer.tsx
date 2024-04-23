import { Typography } from '@/components/ui/typography'
import { FC } from 'react'

type FooterProps = {}

const Footer: FC<FooterProps> = () => {
  return (
    <footer className="rounded-tl-xl rounded-tr-xl bg-primary py-8 text-primary-foreground min-h-[300px] mt-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-4 gap-4">
          <div>
            <Typography variant="h2">Some logo</Typography>
            <Typography className="mt-2">Contacts: 123-456-7890</Typography>
          </div>

          <div className="col-start-2">
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
      </div>
    </footer>
  )
}

export default Footer
