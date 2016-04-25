import React, { Component } from 'react'
import { connect } from 'react-redux'
import { login } from '../actions'

class Login extends Component {
  constructor(props) {
    super(props)
    this.signIn = this.signIn.bind(this)
    const redirectLocation = '/dashboard'
    this.state = { error: false, redirectRoute: redirectLocation }
  }

  signIn(event) {
    event.preventDefault()
    const email = this.refs.email.value
    const pass = this.refs.pass.value
    this.props.dispatch(login(email, pass, this.state.redirectRoute, this.props.history))
  }

  render() {
    return (
      <div className="container">
        <h2>Sign In</h2>
        <form onSubmit={this.signIn}>
          <input ref="email" placeholder="email" />
          <input ref="pass" placeholder="password" type="password" />
          <button className="btn" type="submit">Login</button>
        </form>
     </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { auth: state.auth.isAuthenticated }
}

export default connect(mapStateToProps, null)(Login)
