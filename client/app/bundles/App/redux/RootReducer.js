import {combineReducers} from "redux"
import {helloWorldReducer} from "./modules/HelloWorld"

export default combineReducers({
  helloWorldReducer: helloWorldReducer
})