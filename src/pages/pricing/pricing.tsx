/**
 * v0 by Vercel.
 * @see https://v0.dev/t/hWo2PqtMy9T
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { TableCell, TableRow, TableBody, Table } from "@/components/ui/table"
import { Button } from "@/components/ui/button"

export default function Pricing() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="space-y-4 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Pricing</h1>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed dark:text-gray-400">
            Choose the plan that fits your needs. Monthly or lifetime, we've got you covered.
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
                      <CheckIcon className="h-5 w-5 fill-primary" />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Unlimited collaborators</TableCell>
                    <TableCell>
                      <CheckIcon className="h-5 w-5 fill-primary" />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Unlimited storage</TableCell>
                    <TableCell>
                      <CheckIcon className="h-5 w-5 fill-primary" />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Advanced analytics</TableCell>
                    <TableCell>
                      <CheckIcon className="h-5 w-5 fill-primary" />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Priority support</TableCell>
                    <TableCell>
                      <CheckIcon className="h-5 w-5 fill-primary" />
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
                <p className="text-gray-500 dark:text-gray-400">One-time payment</p>
              </div>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell>Unlimited projects</TableCell>
                    <TableCell>
                      <CheckIcon className="h-5 w-5 fill-primary" />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Unlimited collaborators</TableCell>
                    <TableCell>
                      <CheckIcon className="h-5 w-5 fill-primary" />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Unlimited storage</TableCell>
                    <TableCell>
                      <CheckIcon className="h-5 w-5 fill-primary" />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Advanced analytics</TableCell>
                    <TableCell>
                      <CheckIcon className="h-5 w-5 fill-primary" />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Priority support</TableCell>
                    <TableCell>
                      <CheckIcon className="h-5 w-5 fill-primary" />
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
  )
}

function CheckIcon(props) {
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
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}