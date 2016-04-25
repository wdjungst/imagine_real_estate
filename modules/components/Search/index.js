import React from 'react'
//import styles from './styles.css'
import Title from 'react-title-component'
import { Link } from 'react-router'
//import SearchBox from './SearchBox'
//<Row>
//  <Col s={12} m={4}>
//    <SearchBox />
//  </Col>
//</Row>
//import { Row, Col } from 'react-materialize'

export default React.createClass({
  render() {
    return (
      <div>
        <Title render={prev => `${prev} | Search`}/>
        <br />
        <br />
        <br />
        <h1 className="center">Comming Soon a unique search experience!</h1>
        <h4 className="center">Please check back or <Link to="/contact">Contact Us</Link> to be notified</h4>
      </div>
    )
  }
})

