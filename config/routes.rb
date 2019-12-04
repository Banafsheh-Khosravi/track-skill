Rails.application.routes.draw do
  devise_for :users, path: '/api/v1/users', defaults: { format: :json }
  namespace :api do
    namespace :v1 do
      post 'create_employee'=> 'users#create', as: 'create_employee'
      post 'add_skill' => 'skills#create', as: 'add_skill'
      get 'employees' => 'users#index', as: 'employees'
    end
  end
  root 'homepage#index'
  get '/*path' => 'homepage#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
