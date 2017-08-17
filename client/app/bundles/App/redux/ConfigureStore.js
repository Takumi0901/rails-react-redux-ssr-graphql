import { createStore, applyMiddleware, compose } from 'redux'
import RootReducer from './RootReducer'
import { ApolloClient } from 'react-apollo'
const client = new ApolloClient()

const configureStore = (railsProps) => (
  createStore(RootReducer, railsProps, compose(applyMiddleware(client.middleware())))
)

export default configureStore
