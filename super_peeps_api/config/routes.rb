Rails.application.routes.draw do
  resources :characters
  get '/chars', to: 'characters#chars'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
