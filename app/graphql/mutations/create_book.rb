Mutations::CreateBook = GraphQL::Relay::Mutation.define do
  name "CreateBook"

  return_field :book, Types::BookType
  input_field :name, !types.String
  return_field :books, Types::BookType

  mutator_definition = GraphQL::Models.define_mutator(self, Book, null_behavior: :leave_unchanged) do
    attr :name
  end
  resolve ->(obj, args, ctx) {
    {
      book: Book.create(name:args[:name])
    }
  }
end