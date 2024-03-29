Rails.application.routes.draw do
  if Rails.env.development?
    mount GraphiQL::Rails::Engine, at: "/graphql", graphql_path: "/graphql"
  end
  resources :queries, via: [:post, :options]
  # resources :graphql, only: :create

  post "/graphql", to: "graphql#execute"
  get 'books', to: 'book#index'
  get 'books/:id', to: 'book#detail'
  get 'sample', to: 'sample#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
