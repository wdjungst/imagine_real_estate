import React from 'react'
import { render } from 'react-dom'
import { Router, browserHistory } from 'react-router'
import { createStore, compose, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers/index'
import thunk from 'redux-thunk'
import routes from '../modules/routes'

const createStoreWithMiddleware = compose(
  applyMiddleware(thunk)
)(createStore)

const store = createStoreWithMiddleware(rootReducer)

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes}/>
  </Provider>,
  document.getElementById('app')
)

