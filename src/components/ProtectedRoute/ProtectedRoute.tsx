import { FC, ReactNode } from 'react'
import { Navigate } from 'react-router-dom'

type ProtectedRouteProps = {
  children: ReactNode
}

const ProtectedRoute: FC<ProtectedRouteProps> = ({ children }) => {
  const isAuth = false

  if (!isAuth) {
    return <Navigate to="/login" />
  }

  return children
}

export default ProtectedRoute
