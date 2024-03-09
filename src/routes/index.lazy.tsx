import { HomePage } from '@/pages'
import { createLazyFileRoute } from '@tanstack/react-router'
import { FC } from 'react'

const Index: FC = () => {
  return <HomePage />
}

export const Route = createLazyFileRoute('/')({
  component: Index
})
