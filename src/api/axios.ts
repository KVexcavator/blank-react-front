import axios from 'axios'
import Cookies from 'js-cookie'

const AuthCookies = 'auth'

// dev mode with docker
const BaseURL = 'http://localhost:3000/api/v1'

const setAuthCookie = (value: string): void => {
  Cookies.set(AuthCookies, value)
}

const getAuthCookies = (): string => {
  return Cookies.get(AuthCookies) || 'no_token'
}

const clearAuthCookies = (): void => {
  Cookies.remove(AuthCookies)
}

const HttpRequest = axios.create({
  baseURL: BaseURL,
  headers: {
    'Content-Type': 'multipart/form-data',
  },
})

export { BaseURL, HttpRequest, setAuthCookie, getAuthCookies, clearAuthCookies }
