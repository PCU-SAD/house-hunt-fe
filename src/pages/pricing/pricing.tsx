/**
 * v0 by Vercel.
 * @see https://v0.dev/t/hWo2PqtMy9T
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Container, Layout } from '@/components/common'
import { Button } from '@/components/ui/button'
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table'
import { Typography } from '@/components/ui/typography'
import { CheckIcon } from 'lucide-react'

export default function Pricing() {
  return (
    <Layout>
      <Container>
        <section className="mt-4">
          <div className="container px-4 md:px-6">
            <div className="space-y-4 text-center">
              <Typography variant="h1">Pricing</Typography>
              <p className="mx-auto max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed">
                Choose the plan that fits your needs. Monthly or lifetime, we've
                got you covered.
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
                        <TableCell>Unlimited projects</TableCell>
                        <TableCell>
                          <CheckIcon className="h-5 w-5" />
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Unlimited collaborators</TableCell>
                        <TableCell>
                          <CheckIcon className="h-5 w-5" />
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Unlimited storage</TableCell>
                        <TableCell>
                          <CheckIcon className="h-5 w-5" />
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Advanced analytics</TableCell>
                        <TableCell>
                          <CheckIcon className="h-5 w-5" />
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Priority support</TableCell>
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
                        <TableCell>Unlimited projects</TableCell>
                        <TableCell>
                          <CheckIcon className="h-5 w-5 " />
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Unlimited collaborators</TableCell>
                        <TableCell>
                          <CheckIcon className="h-5 w-5 " />
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Unlimited storage</TableCell>
                        <TableCell>
                          <CheckIcon className="h-5 w-5 " />
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Advanced analytics</TableCell>
                        <TableCell>
                          <CheckIcon className="h-5 w-5 " />
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Priority support</TableCell>
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
  )
}
