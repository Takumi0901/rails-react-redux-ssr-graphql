Types::BlogType = GraphQL::ObjectType.define do
  name "Blog"
  description "A Blog"
  field :title, types.String
  field :content, types.String
  field :author do
    type Types::AuthorType
    resolve -> (obj, args, ctx) {
      obj.author
    }
  end
end
