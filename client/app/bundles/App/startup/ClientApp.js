import React from 'react'
import { ApolloClient, ApolloProvider } from 'react-apollo'
const client = new ApolloClient()
import configureStore from '../redux/ConfigureStore'

import {
  BrowserRouter as Router
} from 'react-router-dom'

import routes from './routes'

export default (props, railsContext) => (
  <ApolloProvider store={configureStore(props)} client={client}>
    <Router>
      {routes}
    </Router>
  </ApolloProvider>
)