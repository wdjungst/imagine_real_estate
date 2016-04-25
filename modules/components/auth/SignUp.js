import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signup } from '../actions'

class SignUp extends Component {
  constructor(props) {
    super(props)
    this.testMatch = this.testMatch.bind(this)
    this.state = { showError: false }
  }

  testMatch() {
    let pw = this.refs.password.value
    let confirm = this.refs.confirmPassword.value
    if (pw === confirm) {
      this.setState({ showError: false })
    } else {
      this.setState({ showError: true })
    }
  }

  signUp(e) {
    e.preventDefault()
    let email = this.refs.email
    let password = this.refs.password
    if (!this.state.showError) {
      this.props.dispatch(signup(email.value, password.value, this.props.history))
    }
  }

  render() {
    let error = () => {
      if (this.state.showError)
        return(<span className="red-text">Passwords Must Match</span>)
    }

    return(
      <div className="container">
        <form onSubmit={(e) => this.signUp(e)}>
          <input placeholder="email" type="email" required={true} ref="email" />
          <input placeholder="password" type="password" required={true} ref="password" />
          <input placeholder="confirm password" type="password" ref="confirmPassword" required={true} onChange={ this.testMatch }/>
          {error()}
          <br/>
          <button className="btn" type="submit">Sign Up</button>
        </form>
      </div>
    )
  }
}

export default connect()(SignUp)
