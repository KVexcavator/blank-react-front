import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Dashboard from './pages/dashboard'
import { Login } from './pages/login'
import { MainRoutes } from './constants/routes'
import { SnackBarDialog } from './components/snack-bar'
import AlertDialog from './components/dialog'
import Auth from './pages/auth'

function App() {
  const RootRedirectionUrl = `${MainRoutes.Login}`
  return (
    <>
      <SnackBarDialog />
      <AlertDialog />
      <BrowserRouter>
        <Routes>
          <Route
            path={MainRoutes.Root}
            element={<Navigate to={RootRedirectionUrl} replace />}
          />

          <Route path={MainRoutes.Login} element={<Login />} />
          <Route element={<Auth allowedRoles={['super', 'admin', 'user', 'accountant']}/>}>
            <Route path={`${MainRoutes.Dashboard}/*`} element={<Dashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

// here
