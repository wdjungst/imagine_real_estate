import React from 'react'
import { Row, Card, Input } from 'react-materialize'

export default React.createClass({
  render() {
    return(
      <div>
        <Card title="Search">
          <Row>
            <Input s={12} placeholder="City, Zip, MLS#" ref="search" required={true} />
            <p className="center">Optional Filters</p>
            <hr />
          </Row>
        </Card>
      </div>
    )
  }
})
