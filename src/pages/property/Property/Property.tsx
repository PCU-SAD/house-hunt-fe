import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Typography } from '@/components/ui/typography'
import { PropertyType } from '@/services/property-service/types'
import { FC } from 'react'

type PropertyProps = {
  property: PropertyType
  images: string[]
}

const Property: FC<PropertyProps> = ({ property, images }) => {
  return (
    <>
      <section className="w-full rounded-md bg-gray-100 p-4 py-12 dark:bg-gray-800 md:py-24">
        <div className="flex flex-col justify-center">
          <img alt="Property" className="" src="/" width="750" />

          <div>
            <Typography variant="h2">
              Modern Apartment in the Heart of the City
            </Typography>
            <div className="flex items-center gap-4">
              <div className="text-2xl font-bold">$2,500</div>
              <div className="text-gray-500 dark:text-gray-400">120 sq.m</div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-4">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-[2fr_1fr]">
            <div>
              <h2 className="text-2xl font-bold">Property Details</h2>
              <div className="mt-4 grid grid-cols-1 gap-4 rounded-lg border-2 border-dashed p-4 dark:border-gray-800 sm:grid-cols-2">
                <div className="grid gap-1">
                  <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    Address
                  </div>
                  <div>123 Main St, Anytown USA 12345</div>
                </div>
                <div className="grid gap-1">
                  <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    Description
                  </div>
                  <div>
                    This modern apartment features an open floor plan, high
                    ceilings, and large windows that let in plenty of natural
                    light. The kitchen is equipped with stainless steel
                    appliances and the bathrooms have been recently renovated.
                  </div>
                </div>
                <div className="grid gap-1">
                  <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    Bedrooms
                  </div>
                  <div>3</div>
                </div>
                <div className="grid gap-1">
                  <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    Bathrooms
                  </div>
                  <div>2</div>
                </div>
                <div className="grid gap-1">
                  <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    Floor
                  </div>
                  <div>4th</div>
                </div>
                <div className="grid gap-1">
                  <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    Parking
                  </div>
                  <div>2 car garage</div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <Card>
                <CardHeader>
                  <CardTitle>Schedule a Showing</CardTitle>
                  <CardDescription>
                    Contact the owner to schedule a viewing of this property.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="space-y-1">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Your name" />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" placeholder="Your email" type="email" />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" placeholder="Your phone number" />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" placeholder="Your message" />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button>Submit</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Contact the Owner</CardTitle>
                  <CardDescription>
                    Get in touch with the owner for more information about this
                    property.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="grid gap-1">
                    <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
                      Name
                    </div>
                    <div>John Doe</div>
                  </div>
                  <div className="grid gap-1">
                    <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
                      Email
                    </div>
                    <div>john.doe@example.com</div>
                  </div>
                  <div className="grid gap-1">
                    <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
                      Phone
                    </div>
                    <div>(555) 555-5555</div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button>Contact Owner</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Property
