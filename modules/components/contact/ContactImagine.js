import React from 'react'
import ContactForm from './ContactForm'

class ContactImagine extends React.Component {
  render() {
    return(
      <div className="container">
        <h3 className="center">Contact Us</h3>
        <div className="row">
          <div className="col s12 m6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3028.187754283842!2d-111.86333674961946!3d40.62574117924007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x875289d4f3921959%3A0x81b350a3d36d8aa6!2s6975+Union+Park+Ave+%23600%2C+Cottonwood+Heights%2C+UT+84047!5e0!3m2!1sen!2sus!4v1461537649050"
              style={{ width: '100%', height: '50vh', frameBorder:'0', border: '0' }}
              allowFullScreen={true}
            >
            </iframe>
            <h5 className="center">
              <a href="tel:8012057000">801-205-7000</a>
            </h5>
            <h5 className="center">
              contact@imagineutah.com
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
