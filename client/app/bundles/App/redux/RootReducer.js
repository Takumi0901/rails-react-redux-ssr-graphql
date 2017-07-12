import {combineReducers} from "redux"
import {helloWorldReducer} from "./modules/HelloWorld"
import { ApolloClient } from 'react-apollo';
const client = new ApolloClient()

export default combineReducers({
  helloWorldReducer: helloWorldReducer,
  apollo: client.reducer()
})