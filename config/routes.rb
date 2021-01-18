Rails.application.routes.draw do
  resources :messages, only: :create
  resources :game_rooms, only: [:show, :create]
  root 'landing#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
