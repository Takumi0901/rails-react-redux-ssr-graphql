Types::BookType = GraphQL::ObjectType.define do
  name "Book"
  backed_by_model :books do
    attr :name
  end
end