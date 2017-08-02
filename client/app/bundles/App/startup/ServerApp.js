import React from 'react'
import { ApolloClient, ApolloProvider } from 'react-apollo'
import { StaticRouter } from 'react-router'
const client = new ApolloClient()
import configureStore from '../redux/ConfigureStore'
import routes from './routes'

export default (props, railsContext) => {
  const store = configureStore(props)
  const { location } = railsContext
  const context = {}

  return (
    <ApolloProvider store={store} client={client}>
      <StaticRouter location={location} context={context}>
        {routes}
      </StaticRouter>
    </ApolloProvider>
  )
}