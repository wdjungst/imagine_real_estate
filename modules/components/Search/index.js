import React from 'react'
//import styles from './styles.css'
import Title from 'react-title-component'
import { Link } from 'react-router'
//import SearchBox from './SearchBox'
//import { Row, Col } from 'react-materialize'
//        <Row>
//          <Col s={12}>
//            <SearchBox />
//          </Col>
//        </Row>

export default React.createClass({
  render() {
    return (
      <div>
        <Title render={prev => `${prev} | Search`}/>
        <br />
        <br />
        <br />
        <h1 className="center">Coming Soon a unique search experience!</h1>
        <h4 className="center">Please check back or <Link to="/contact">Contact Us</Link> to be notified</h4>
      </div>
    )
  }
})

