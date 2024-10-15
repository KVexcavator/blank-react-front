import { createContext, useContext, useState } from 'react'
import { AuthContextType, Auth } from './auth_type_context'

export const AuthContext = createContext<AuthContextType | null>(null)

export const startAuthValue = {
  id: -1,
  first_name: "",
  last_name: "",
  email: "",
  role: "",
  authentication_token: ""
}

const AuthProvider = ({ children }: any) => {
  const [authMode, setAuth] = useState<Auth>(
    startAuthValue
  )

  return (
    <AuthContext.Provider value={{ auth: authMode, changeAuth: setAuth }}>
      {children}
    </AuthContext.Provider>
  )

}

export default AuthProvider
