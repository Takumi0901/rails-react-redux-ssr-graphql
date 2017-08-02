import {combineReducers} from "redux"
import {helloWorldReducer} from "./modules/HelloWorld"
import {routerReducer} from 'react-router-redux'
import { ApolloClient } from 'react-apollo';
const client = new ApolloClient()

export default combineReducers({
  helloWorld: helloWorldReducer,
  routing: routerReducer,
  apollo: client.reducer()
})