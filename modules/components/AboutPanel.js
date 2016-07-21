import React, { Component } from 'react'
import styles from './styles.css'
//import janet from './janet.jpg'
//import cindy from './cindy.jpg'

class AboutPanel extends Component {
  render() {
    return(
      <div>
        <div className="center">
          <h3 className={`${styles.yellow}'}`}>About Imagine</h3>
        </div>
        <div className="container">
          <p>Just IMAGINE a team of professionals working to help you realize your dreams.  That's exactly what you'll get when you put IMAGINE Real Estate to work for you!  This company was built on a fundamental principle -- SERVICE!  We realize that technology plays an integral part in the industry but that does not change the fact that the Real Estate business is a people business.  At IMAGINE, you will find the tools you need, but more importantly, you will find some of the most professional Realtors in the state. We understand the market and are committed to serving our clients with knowledge and integrity.
         </p>
        <p>At IMAGINE Real Estate, we are equipped to serve you!  Our standards are high and your expectations should be as well!  Whether you are looking for your first home or ready to retire --whatever you IMAGINE is possible!
        </p>
      </div>
     </div>
    )
  }
}

export default AboutPanel
