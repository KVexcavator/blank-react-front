import { useLocation, Navigate, Outlet } from "react-router-dom"
import { useContext } from "react"
import { AuthContext } from "../context/auth_context"
import { AuthContextType } from "../context/auth_type_context"

const Auth = ({ allowedRoles }: any) => {
    const { auth } = useContext(AuthContext) as AuthContextType
    const location = useLocation();

  return (
    allowedRoles.find((role: any)  => auth?.role?.includes(role))
      ? <Outlet/>
      : <Navigate to="/login" state={{from: location}} replace/>
  )
}

export default Auth;
