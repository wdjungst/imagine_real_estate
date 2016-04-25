import React, { Component } from 'react'
import styles from './styles.css'
import { Row, Col } from 'react-materialize'
import { Link } from 'react-router'

class IconPanel extends Component {
  render() {
    return(
      <div className={`${styles.linkRow}`}>
        <Row>
          <Col s={12} m={3}>
            <div className={`${styles.iconContainer} center`}>
              <Link to="/search_homes">
                <i className={`${styles.icon} ${styles.yellow} fa fa-map-marker`}></i>
                <p className={`${styles.yellow} center`}>SEARCH HOMES</p>
              </Link>
            </div>
          </Col>
          <Col s={12} m={3}>
            <div className={`${styles.iconContainer} center`}>
              <Link to="/agents">
                <i className={`${styles.icon} ${styles.yellow} fa fa-search`}></i>
                <p className={`${styles.yellow} center`}>FIND AN AGENT</p>
              </Link>
            </div>
          </Col>
          <Col s={12} m={3}>
            <div className={`${styles.iconContainer} center`}>
              <Link to="due_dilligence">
                <i className={`${styles.icon} ${styles.yellow} fa fa-check`}></i>
                <p className={`${styles.yellow} center`}>DUE DILLIGENCE</p>
              </Link>
            </div>
          </Col>
          <Col s={12} m={3}>
            <div className={`${styles.iconContainer} center`}>
              <Link to="contact">
                <i className={`${styles.icon} ${styles.yellow} fa fa-envelope`}></i>
                <p className={`${styles.yellow} center`}>CONTACT</p>
              </Link>
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}

export default IconPanel
