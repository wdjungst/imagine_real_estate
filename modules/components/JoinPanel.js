import React, { Component } from 'react'
import styles from './styles.css'
import { Row, Col } from 'react-materialize'
import ContactForm from './contact/ContactForm'

class JoinPanel extends Component {
  render() {
    return(
      <div id="careers" className={styles.blueBg}>
        <div className="center-align">
          <h1 className="white-text">Join Our Team</h1>
        </div>
        <div className="container">
          <Row>
            <Col s={12} m={6}>
              <h5 className="white-text center">Get more info on becoming an agent</h5>
              <ContactForm email="janet@imagineutah.com" whiteText={true} />
            </Col>
            <Col s={12} m={4} offset={"m2"}>
              <h5 className={`${styles.bottom} white-text center`}>Why agents love us</h5>
              <div className="container">
                <Row>
                  <Col className="center" s={2}><i className={`fa fa-dollar ${styles.yellow} ${styles.iconSm}`}></i></Col>
                  <Col s={8}><h6 className={styles.yellow}>Great Commissions</h6></Col>
                </Row>
                <Row>
                  <Col className="center" s={2}><i className={`fa fa-support ${styles.yellow} ${styles.iconSm}`}></i></Col>
                  <Col s={8}><h6 className={styles.yellow}>Great Support</h6></Col>
                </Row>
                <Row>
                  <Col className="center" s={2}><i className={`fa fa-globe ${styles.yellow} ${styles.iconSm}`}></i></Col>
                  <Col s={8}><h6 className={styles.yellow}>Custom Webpage</h6></Col>
                </Row>
                <Row>
                  <Col className="center" s={2}><i className={`fa fa-cogs ${styles.yellow} ${styles.iconSm}`}></i></Col>
                  <Col s={8}><h6 className={styles.yellow}>Online Portal</h6></Col>
                </Row>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    )
  }
}

export default JoinPanel
