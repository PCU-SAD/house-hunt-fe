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
import { FC, useEffect, useState } from 'react'

export const CookiesDialog: FC = () => {
  const [open, setOpen] = useState(false)
  const [cookies, setCookies] = useState({
    functional: false
  })

  const onAccept = () => {
    setOpen(false)
    localStorage.setItem('cookies', JSON.stringify(cookies))
  }

  useEffect(() => {
    const cookies = JSON.parse(localStorage.getItem('cookies')) || ''
    setCookies(cookies)

    if (!cookies) {
      setOpen(true)
    }
  }, [])

  useEffect(() => {
    const cookies = JSON.parse(localStorage.getItem('cookies')) || ''
    setCookies(cookies)
  }, [open])

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger
        className={cn(
          buttonVariants({
            variant: 'outline',
            size: 'icon'
          }),
          'shadow-full fixed bottom-8 left-8 z-50 rounded-full bg-white p-2'
        )}>
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

          <Switch id="strictly_necessary_cookies" checked disabled />
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

          <Switch
            id="functional_cookies"
            checked={cookies.functional}
            onCheckedChange={(checked) => {
              setCookies({ ...cookies, functional: checked })
            }}
          />
        </div>

        <DialogFooter>
          <Button
            type="submit"
            className="mt-4 w-full"
            variant="outline"
            onClick={onAccept}>
            Save preferences
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
