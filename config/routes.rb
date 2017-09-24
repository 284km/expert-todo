Rails.application.routes.draw do
  resources :tasks, only: [:create]

  devise_for :users
  root to: "home#index"

  get 'home/index'
  get 'home/show'
end
