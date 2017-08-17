Mutations::DestroyBook = GraphQL::Relay::Mutation.define do
  name "DestroyBook"

  input_field :id, !types.ID

  # Define return parameters
  return_field :book, Types::BookType
  return_field :errors, types.String

  resolve ->(_obj, inputs, ctx) {
    book = Book.find_by_id(inputs[:id])
    return { errors: 'Comment not found' } if book.nil?
    article = book
    book.destroy

    { book: article }
  }
end