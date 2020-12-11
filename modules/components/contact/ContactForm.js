import React from 'react'
import $ from 'jquery'
import { Button } from 'react-materialize'
import * as styles from '../styles.css'

class ContactForm extends React.Component {
  constructor(props) {
    super(props)
    this.contact = this.contact.bind(this)
    this.button = this.button.bind(this)
    this.state = { msg: '', error: false, isSubmitting: false }
    this.igloo
  }

  componentDidMount() {
    $.ajax({
      url: '/api/contact',
      type: 'get'
    }).done( token => {
      this.igloo = token
      const recaptcha = document.createElement('script')
      recaptcha.src = `https://www.google.com/recaptcha/api.js?render=${token}`
      document.body.appendChild(recaptcha)
    })
  }

  contact(e) {
    e.preventDefault()
    /* eslint-disable */
    grecaptcha.ready( () => {
      grecaptcha.execute(this.igloo, { action: 'submit' })
        .then( token => {
          let name = this.refs.name
          let email = this.refs.email
          let phone = this.refs.phone
          let content = this.refs.content
          this.setState({ isSubmitting: true })
          $.ajax({
            url: '/api/contact',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({
              name: name.value,
              email: email.value,
              phone: phone.value,
              content: content.value,
              notify: this.props.email
            })
          }).done( () => {
            this.refs.name.value = ''
            this.refs.email.value = ''
            this.refs.phone.value = ''
            this.refs.content.value = ''
            this.setState({ msg: 'Your message has been sent', error: false, isSubmitting: false })
          }).fail( () => {
            this.setState({ msg: 'Something went wrong.  Please try again', error: true, isSubmitting: false })
          })
          if (token) {
          }
        })
    })

  }

  button() {
    if (!this.state.isSubmitting)
      return(<Button className={`${styles.yellowBg} ${styles.blue} ${styles.bottom}`} waves="light" type="submit">Submit</Button>)
    else
      return(<Button className={`${styles.bottom}`} waves="light" type="button">Submitting...</Button>)

  }

  render() {
    let msg = () => {
      let style = { color: 'green' }
      if (this.state.error)
        style = { color: 'red' }
      return(<span className="center" style={style}>{this.state.msg}</span>)
    }
    let whiteText = this.props.whiteText ? 'white-text' : ''
    return(
      <form className={whiteText} onSubmit={this.contact}>
        {msg()}
        <div className="input-field col s12">
          <label>Name</label>
          <br />
          <input id="name" required="required" ref="name"/>
        </div>
        <div className="input-field col s12">
          <label>Email</label>
          <br />
          <input id="email" type="email" label="Email" required="required" ref="email" />
        </div>
        <div className="input-field col s12">
          <label>Phone</label>
          <br />
          <input id="phone" ref="phone"/>
        </div>
        <div className="input-field col s12">
          <label>Comments</label>
          <br />
          <textarea id="textarea" className="materialize-textarea" ref="content"></textarea>
        </div>
        <div className="center-align">
          {this.button()}
        </div>
      </form>
    )
  }
}

export default ContactForm
