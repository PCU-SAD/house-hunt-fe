// import { createHashRouter } from 'react-router-dom'
// import { Container, Layout, ProtectedRoute } from './components'
// import { Typography } from './components/ui/typography'
// import { ErrorPage, HomePage, LoginPage } from './pages'
// import { SignupPage } from './pages/auth/Signup'

// export const router = createHashRouter([
//   {
//     path: '/',
//     element: (
//       <Layout>
//         <HomePage />
//       </Layout>
//     ),
//     errorElement: <ErrorPage />
//   },
//   {
//     path: '/login',
//     element: <LoginPage />
//   },
//   {
//     path: '/signup',
//     element: <SignupPage />
//   },
//   {
//     path: '/houses',
//     element: (
//       <ProtectedRoute>
//         <Layout>
//           <Container>
//             <div>houses</div>
//           </Container>
//         </Layout>
//       </ProtectedRoute>
//     )
//   },
//   {
//     path: '/apartments',
//     element: (
//       <ProtectedRoute>
//         <Layout>
//           <Container>
//             <div>apartments</div>
//           </Container>
//         </Layout>
//       </ProtectedRoute>
//     )
//   },
//   {
//     path: '/privacy-policy',
//     element: (
//       <ProtectedRoute>
//         <Layout>
//           <Container>
//             <Typography variant="h3" className="mt-6">
//               We will take all your money ; - )
//             </Typography>
//           </Container>
//         </Layout>
//       </ProtectedRoute>
//     )
//   },
//   {
//     path: '/*',
//     element: <ErrorPage />
//   }
// ])
