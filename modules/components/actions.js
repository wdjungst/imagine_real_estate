import $ from 'jquery'
import { push } from 'react-router-redux'

export const logout = () => {
  return {
    type: 'USER_LOGGED_OUT'
  }
}

export const loggedIn = (id, token) => {
  return {
    type: 'USER_LOGGED_IN',
    id,
    token
  }
}

export const login = (email, pass, redirect, history) => {
  return (dispatch) => {
    $.ajax({
      url: '/api/auth/signin',
      type: 'POST',
      contentType: 'application/json',
      data: JSON.stringify({ email: email, password: pass })
    }).done( res => {
      const token = getToken()
      sessionStorage.token = token
      sessionStorage.userId = res.id
      dispatch(loggedIn(res.id, token))
      history.push(redirect)
    }).fail( res => {
      sessionStorage.clear()
      dispatch(logout())
    })
  }
}

export const signup = (email, pass, history) => {
  return (dispatch) => {
    $.ajax({
      url: '/api/auth/signup',
      type: 'POST',
      contentType: 'application/json',
      data: JSON.stringify({ email: email, password: pass })
    }).done( res => {
      const token = getToken()
      sessionStorage.token = token
      sessionStorage.userId = res.id
      dispatch(loggedIn(res.id, token))
      history.push('/dashboard')
    }).fail( res => {
      sessionStorage.clear()
      dispatch(logout())
    })
  }
}

export const search = (propNum) => {
  let propertyType = 'Residential'
  switch (propNum) {
    case '1':
      propertyType = 'Commercial'
      break
    case '2':
      propertyType = 'Farm'
      break
    case '3':
      propertyType = 'Lots and Land'
      break
    case '4':
      propertyType = 'Multi-Family'
      break
    case '5':
      propertyType = 'Residential'
      break
  }
  return {
    type: 'SUB_PROP_TYPE',
    propertyType
  }
}

const getToken = () => {
  return Math.random().toString(36).substring(7)
}
