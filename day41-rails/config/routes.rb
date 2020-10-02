Rails.application.routes.draw do
  get '/help', to: 'pages#help'
  get '/about', to: 'pages#about'
  resources :microposts
  resources :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  root 'pages#home'

end
