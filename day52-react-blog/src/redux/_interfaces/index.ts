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
  showCommentBar: boolean,
  blogPostId: number | null
}

export interface LoginCredentials {
  email: string,
  password: string
}

export interface UserResponse {
  id: number,
  name: string,
  email: string,
  created_at: string,
  updated_at: string,
  liked_posts: [],
  liked_comments: []
}

export interface BlogPostsResponse {
  id: number,
  title: string,
  body: string,
  user_id: number,
  created_at: string,
  updated_at: string,
  comments_count: number,
  likes_count: number,
  user: {
    id: number,
    name: string
  },
  tags_list: string[]
}


export interface SignupData {
  name: string,
  email: string,
  password: string,
  password_confirmation: string
}

export interface BlogPostValues {
  title: string,
  body: string,
  image: string
}