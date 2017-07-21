RailsReactReduxSsrGraphqlSchema = GraphQL::Schema.define do
  query(Types::QueryType)
  mutation(Types::MutationType)

  # lazy_resolve(Promise, :sync)
  # instrument(:query, GraphQL::Batch::Setup)
  # instrument(:field, GraphQL::Models::Instrumentation.new)
end

# RailsReactReduxSsrGraphqlSchema = GraphQL::Schema.new(query: QueryType)
