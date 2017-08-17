Types::QueryType = GraphQL::ObjectType.define do
  name "Query"
  description "The query root for this schema"

  field :book, Types::BookType do
    description "An example field added by the generator"
    argument :id, !types.ID
    resolve ->(obj, args, ctx) {
      Book.find(args[:id])
    }
  end

  field :allBooks, types[Types::BookType] do
    description "An example field added by the generator"
    resolve ->(obj, args, ctx) {
      Book.all
    }
  end

end

