Rails.application.routes.draw do
  devise_for :users, path: '/api/v1/users', defaults: { format: :json }
  root 'homepage#index'
  get '/*path' => 'homepage#index'

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
