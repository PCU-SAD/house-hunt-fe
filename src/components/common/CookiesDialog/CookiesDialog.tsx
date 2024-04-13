import { Button, buttonVariants } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'
import { Typography } from '@/components/ui/typography'
import { cn } from '@/lib/utils'
import { Cookie } from 'lucide-react'
import { FC } from 'react'

export const CookiesDialog: FC = () => {
  return (
    <Dialog>
      <DialogTrigger
        className={cn(
          buttonVariants({
            variant: 'outline',
            size: 'icon'
          })
        )}
      >
        <Cookie size={18} />
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-4">
            <p>Manage cookies</p>
            <Cookie className="" />
          </DialogTitle>
          <DialogDescription>
            Our website uses cookies to improve your experience.
          </DialogDescription>
        </DialogHeader>

        <div className="flex items-center space-x-6 rounded-md px-3">
          <div>
            <Label htmlFor="strictly_necessary_cookies">
              <Typography className="font-bold">Strictly Necessary</Typography>

              <Typography variant="muted" className="font-normal leading-5">
                These cookies are essential in order to use the website and use
                its features.
              </Typography>
            </Label>
          </div>

          <Switch id="strictly_necessary_cookies" />
        </div>
        <div className="flex items-center space-x-6 rounded-md px-3">
          <div>
            <Label htmlFor="functional_cookies">
              <Typography className="font-bold">Functional Cookies</Typography>

              <Typography variant="muted" className="font-normal leading-5">
                These cookies allow the website to provide personalized
                functionality.
              </Typography>
            </Label>
          </div>

          <Switch id="functional_cookies" />
        </div>
        <div className="flex items-center space-x-6 rounded-md px-3">
          <div>
            <Label htmlFor="performance_cookies">
              <Typography className="font-bold">Performance Cookies</Typography>

              <Typography variant="muted" className="font-normal leading-5">
                These cookies help to improve the performance of the website.
              </Typography>
            </Label>
          </div>

          <Switch id="performance_cookies" />
        </div>

        <DialogFooter>
          <Button type="submit" className="mt-4 w-full" variant="outline">
            Save preferences
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
