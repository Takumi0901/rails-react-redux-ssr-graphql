RailsReactReduxSsrGraphqlSchema = GraphQL::Schema.define do
  query(Types::QueryType)
  mutation(Types::MutationType)

  # lazy_resolve(Promise, :sync)
  # instrument(:query, GraphQL::Batch::Setup)
  # instrument(:field, GraphQL::Models::Instrumentation.new)
  use GraphQL::Batch
  max_depth 12
  max_complexity 100
end

RailsReactReduxSsrGraphqlSchema.middleware << GraphQL::Schema::TimeoutMiddleware.new(max_seconds: 10) do |err, query|
  Rails.logger.info("GraphQL Timeout: #{query.query_string}")
end

log_query_complexity = GraphQL::Analysis::QueryComplexity.new { |query, complexity| Rails.logger.info("[GraphQL Query Complexity] #{complexity}")}
RailsReactReduxSsrGraphqlSchema.query_analyzers << log_query_complexity
