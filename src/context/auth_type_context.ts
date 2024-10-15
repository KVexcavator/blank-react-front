export interface Auth {
  id: number,
  first_name: string,
  last_name: string,
  email: string,
  role: string,
  authentication_token: string
}

export type AuthContextType = {
  auth: Auth
  changeAuth: (auth: Auth) => void
}
