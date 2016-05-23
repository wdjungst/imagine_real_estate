import React from 'react'
//import styles from './styles.css'
import Title from 'react-title-component'
import { Link } from 'react-router'
import SearchBox from './SearchBox'
import { Row, Col } from 'react-materialize'

export default React.createClass({
  render() {
    return (
      <div>
        <Title render={prev => `${prev} | Search`}/>
        <Row>
          <Col s={12}>
            <SearchBox />
          </Col>
        </Row>
      </div>
    )
  }
})

