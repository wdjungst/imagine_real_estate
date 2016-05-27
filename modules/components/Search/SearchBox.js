import React from 'react'
import { Row, Card, Input } from 'react-materialize'
import { connect } from 'react-redux'
import { search } from '../actions'
import Select from 'react-select'
import { cities, counties } from './options'

class SearchBox extends React.Component {
  constructor(props) {
    super(props)
    this.searchType = this.searchType.bind(this)
    this.state = { searchType: 'city' }
  }

  handleChange(e) {
    this.props.dispatch(search(e.target.value))
  }

  selected(val) {
    return val === this.props.propertyType
  }

  toggleType(e) {
    this.setState({ searchType: e.target.value })
  }

  searchType() {
    let options
    switch (this.state.searchType) {
      case 'city':
        options = cities()
        return (
                 <div className="col s12">
                   <Select
                     name="Cities"
                     multi={true}
                     name="cities"
                     options={options}
                   />
                 </div>
                )
      case 'county':
        options = counties()
        return (
                 <div className="col s12">
                   <Select
                     name="Counties"
                     multi={true}
                     name="cities"
                     options={options}
                   />
                 </div>
                )
      case 'mls':
        return (<Input s={12} className="Search" type="text" label="MLS #'s comma seperated up to 25" />)
    }
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
            <div className="col s12">
              <Input onChange={this.toggleType.bind(this)} type="radio" name="searchType" value="city" label="City" defaultChecked={true}/>
              <Input onChange={this.toggleType.bind(this)} type="radio" name="searchType" value="county" label="County" />
              <Input onChange={this.toggleType.bind(this)} type="radio" name="searchType" value="mls" label="MLS#" />
            </div>
            <div className="col s12">
              {this.searchType()}
            </div>
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
