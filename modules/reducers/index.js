import { combineReducers } from 'redux'
import { routeReducer } from 'react-router-redux'
import auth from './auth'
import search from './search'

const rootReducer = combineReducers({
  auth,
  search
})

export default rootReducer
