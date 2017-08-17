Types::BookType = GraphQL::ObjectType.define do
  name "Book"
  field :id, types.Int
  field :name, types.String
end