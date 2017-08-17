import {combineReducers} from "redux"
import {helloWorldReducer} from "./modules/HelloWorld"
import {routerReducer} from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'
import { ApolloClient } from 'react-apollo'
const client = new ApolloClient()

export default combineReducers({
  helloWorld: helloWorldReducer,
  routing: routerReducer,
  form: formReducer,
  apollo: client.reducer()
})