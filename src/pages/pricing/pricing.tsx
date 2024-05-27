import { Container, Layout } from '@/components/common'
import { Button } from '@/components/ui/button'
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table'
import { Typography } from '@/components/ui/typography'
import { CheckIcon } from 'lucide-react'

export default function Pricing() {
  return (
    <>
      <Layout>
        <Container>
          <section className="mt-4">
            <div className="container px-4 md:px-6">
              <div className="space-y-4 text-center">
                <Typography variant="h1">Pricing</Typography>
                <p className="mx-auto text-muted-foreground">
                  Choose the plan that fits your needs. Monthly or lifetime,
                  we've got you covered.
                </p>
              </div>
              <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-10">
                <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold">Monthly</h3>
                      <p className="text-4xl font-bold">$9</p>
                      <p className="text-gray-500 dark:text-gray-400">/month</p>
                    </div>
                    <Table>
                      <TableBody>
                        <TableRow>
                          <TableCell>Unlimited Listings: Post as many property listings as you need without any restrictions.</TableCell>
                          <TableCell>
                            <CheckIcon className="h-5 w-5" />
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Unlimited Contacts: Connect with an unlimited number of potential buyers or renters.</TableCell>
                          <TableCell>
                            <CheckIcon className="h-5 w-5" />
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Premium Property Photos: Upload and showcase high-quality photos for all your listings.</TableCell>
                          <TableCell>
                            <CheckIcon className="h-5 w-5" />
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Advanced Analytics: Gain insights into your listings' performance with our comprehensive analytics tools.</TableCell>
                          <TableCell>
                            <CheckIcon className="h-5 w-5" />
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Priority Customer Support: Get your questions answered and issues resolved faster with our priority support service.</TableCell>
                          <TableCell>
                            <CheckIcon className="h-5 w-5 " />
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                    <Button className="w-full">Get Started</Button>
                  </div>
                </div>
                <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950">
                  <div className="space-y-4">
                    <div>
                      
                      <h3 className="text-2xl font-bold">Lifetime</h3>
                      <p className="text-4xl font-bold">$199</p>
                      <p className="text-gray-500 dark:text-gray-400">
                        One-time payment
                      </p>
                    </div>
                    <Table>
                      <TableBody>
                        <TableRow>
                          <TableCell>Unlimited Listings: Enjoy the freedom to post unlimited property listings for life.</TableCell>
                          <TableCell>
                            <CheckIcon className="h-5 w-5 " />
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Unlimited Contacts: Network with as many buyers or renters as you want, forever.</TableCell>
                          <TableCell>
                            <CheckIcon className="h-5 w-5 " />
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Premium Property Photos: Benefit from the ability to upload and display high-quality images for all your properties.</TableCell>
                          <TableCell>
                            <CheckIcon className="h-5 w-5 " />
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Advanced Analytics: Access powerful analytics tools to help you track and optimize your listings' performance.</TableCell>
                          <TableCell>
                            <CheckIcon className="h-5 w-5 " />
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Priority Customer Support: Receive top-notch priority support whenever you need it, ensuring a smooth experience.</TableCell>
                          <TableCell>
                            <CheckIcon className="h-5 w-5 " />
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                    <Button className="w-full">Get Lifetime</Button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Container>
      </Layout>
    </>
  )
}
