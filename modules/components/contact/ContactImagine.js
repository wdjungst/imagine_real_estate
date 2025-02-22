import React from 'react'
import ContactForm from './ContactForm'

class ContactImagine extends React.Component {
  render() {
    return(
      <div className="container">
        <h3 className="center">Contact Us</h3>
        <div className="row">
          <div className="col s12 m6">
            <h5 className="center">
              <a href="tel:8012057000">801-205-7000</a>
            </h5>
            <h5 className="center">
              janet@imagineutah.com
            </h5>
          </div>
          <div className="col s12 m6">
            <ContactForm email="janet@imagineutah.com" />
          </div>
        </div>
      </div>
    )
  }
}

export default ContactImagine
