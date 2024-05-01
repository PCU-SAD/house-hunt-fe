import { Container, Layout } from '@/components'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationNext,
  PaginationPrevious
} from '@/components/ui/pagination'
import { cn } from '@/lib/utils'
import { FC } from 'react'

type HousesPageProps = {}

const HousesPage: FC<HousesPageProps> = () => {
  return (
    <Layout>
      <Container>
        <div className="mt-6 grid grid-cols-fluid gap-4">
          {new Array(10).fill(0).map((_, index) => (
            <Card key={index}>
              <CardHeader>
                <h2>Apartment {index + 1}</h2>
              </CardHeader>
              <CardContent>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam, voluptate.
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Pagination className="mt-6">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious />
            </PaginationItem>

            <PaginationItem>
              <Button
                variant="ghost"
                className={cn({
                  'bg-slate-800 text-white hover:bg-slate-800 hover:text-white':
                    true
                })}>
                1
              </Button>
            </PaginationItem>
            <PaginationItem>
              <Button variant="ghost">2</Button>
            </PaginationItem>
            <PaginationItem>
              <Button variant="ghost">3</Button>
            </PaginationItem>

            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>

            <PaginationItem>
              <PaginationNext />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </Container>
    </Layout>
  )
}

export default HousesPage
