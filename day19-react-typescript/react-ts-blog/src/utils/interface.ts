export interface User {
  id?: number,
  name: string,
  email: string,
  password: string
}

export interface Auth {
  isAuthenticated: boolean,
  token: string
}