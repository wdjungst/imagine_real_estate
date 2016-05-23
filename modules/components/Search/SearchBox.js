import React from 'react'
import { Row, Card, Input } from 'react-materialize'
import { connect } from 'react-redux'
import { search } from '../actions'

class SearchBox extends React.Component {
  handleChange(e) {
    this.props.dispatch(search(e.target.value))
  }

  selected(val) {
    return val === this.props.propertyType
  }

  render() {
    let count = 0
    let subTypes = this.props.subTypes.map( subType => {
      return(
        <Input type="checkbox" value={subType} label={subType} key={count++} />
      )
    })
    return(
      <div>
        <Card title="Search">
          <Row>
            <Input s={12} type="select" label="Property Type" onChange={this.handleChange.bind(this)}>
              <option selected={this.selected('Commercial')} value="1">Commercial</option>
              <option selected={this.selected('Farm')} value="2">Farm</option>
              <option selected={this.selected('Lots and Land')} value="3">Lots and Land</option>
              <option selected={this.selected('Multi-Family')} value="4">Multi-Family</option>
              <option selected={this.selected('Residential')} value="5">Residential</option>
            </Input>
            {subTypes}
          </Row>
        </Card>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { subTypes: state.search.subTypes, propertyType: state.search.propertyType }
}

export default connect(mapStateToProps)(SearchBox)
