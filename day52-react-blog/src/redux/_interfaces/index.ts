export interface LoginResponse {
  access_token: string,
  expires_in: string,
}

export interface Action {
  type: string,
  payload?: any,
  meta?: any
}

export interface AuthState {
  token: string,
  isAuthenticated: boolean,
  expiresAt: any,
}

export interface UiState {
  isSubmitting: boolean,
}

export interface LoginCredentials {
  email: string,
  password: string
}