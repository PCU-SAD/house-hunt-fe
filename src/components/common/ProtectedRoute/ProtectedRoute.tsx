import { FC, ReactNode } from 'react'
import { Navigate } from '@tanstack/react-router'

type ProtectedRouteProps = {
  children: ReactNode
}

const ProtectedRoute: FC<ProtectedRouteProps> = ({ children }) => {
  const isAuth = true

  if (!isAuth) {
    return <Navigate to="/login" />
  }

  return children
}

export default ProtectedRoute
