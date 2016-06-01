import { combineReducers } from 'redux'
import { routeReducer } from 'react-router-redux'
import auth from './auth'
import search from './search'
import agents from './agents'

const rootReducer = combineReducers({
  auth,
  search,
  agents
})

export default rootReducer
