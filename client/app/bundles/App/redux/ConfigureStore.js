import { createStore } from 'redux'
import RootReducer from './RootReducer'

const configureStore = (railsProps) => (
  createStore(RootReducer, railsProps)
);

export default configureStore
