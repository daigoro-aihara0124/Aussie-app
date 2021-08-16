Rails.application.routes.draw do

  namespace :api do
    namespace :v1 do
      get 'reserves/index'
    end
  end
  namespace :api do
    namespace :v1 do
      resources :posts, only: [:index, :show, :create, :update, :destroy]
      resources :likes, only: [:index, :create, :destroy]
      resources :reserves, only: [:index, :create, :show, :destroy]

      mount_devise_token_auth_for 'User', at: 'auth', controllers: {
        registrations: 'api/v1/auth/registrations',
        sessions: 'api/v1/auth/sessions'
      }
    end
  end
end
