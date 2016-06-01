import React from 'react'
import { Row, Card, Input } from 'react-materialize'
import { connect } from 'react-redux'
import { search } from '../actions'
import Select from 'react-select'
import { thumb } from './styles.css'
import {
  cities,
  counties,
  postalCodes,
  commercial,
  farm,
  lotsAndLand,
  multiFamily,
  residential
} from './options'

class SearchBox extends React.Component {

  constructor(props) {
    super(props)
    this.searchType = this.searchType.bind(this)
    this.subPropTypes = this.subPropTypes.bind(this)
    this.contact = this.contact.bind(this)
    this.state = { searchType: '', showResults: false }
  }

  handleChange(e) {
    this.props.dispatch(search(e.target.value))
  }

  toggleResults() {
    this.setState({ showResults: false, searchType: '' })
  }


  selected(val) {
    return val === this.props.propertyType
  }

  toggleType(e) {
    this.setState({ searchType: e.target.value })
  }

  subPropTypes() {
    let options
    switch (this.props.propertyType) {
      case 'Residential':
        options = residential()
        return (
          <div className="col s12 m6">
            <label>Property Style</label>
            <Select
              multi={true}
              name="a_propertyStyle[]"
              options={options}
            />
          </div>
        )
      case 'Commercial':
        options = commercial()
        return (
          <div className="col s12 m6">
            <label>Property Type</label>
            <Select
              multi={true}
              name="a_propSubType[]"
              options={options}
            />
          </div>
        )
      case 'Farm':
        options = farm()
        return (
          <div className="col s12 m6">
            <label>Farm Type</label>
            <Select
              multi={true}
              name="a_farmType[]"
              options={options}
            />
          </div>
        )
      case 'Lots and Land':
        options = lotsAndLand()
        return (
          <div className="col s12 m6">
            <label>Property Type</label>
            <Select
              multi={true}
              name="a_propSubType[]"
              options={options}
            />
          </div>
        )
      case 'Multi-Family':
        options = multiFamily()
        return(
          <div className="col s12 m6">
            <label>Property Style</label>
            <Select
              multi={true}
              name="a_propertyStyle[]"
              options={options}
            />
          </div>
        )
    }
  }

  searchType() {
    let options
    switch (this.state.searchType) {
      case 'city':
        options = cities()
        return (
                 <div className="col s12 m6">
                   <label>Cities</label>
                   <Select
                     multi={true}
                     name="city[]"
                     options={options}
                   />
                 </div>
                )
      case 'county':
        options = counties()
        return (
                 <div className="col s12 m6">
                   <label>Counties</label>
                   <Select
                     multi={true}
                     name="county[]"
                     options={options}
                   />
                 </div>
                )
      case 'postal_code':
        options = postalCodes()
        return (
          <div className="col s12 m6">
            <label>Postal Codes</label>
            <Select
              name="zipcode[]"
              multi={true}
              options={options}
            />
          </div>
        )
      case 'mls':
        return (<Input s={12} name="csv_listingID" className="Search" type="text" label="MLS #'s comma seperated up to 25" />)
      default:
        return (<p className="center col s12 m6 red-text">Select a search Type</p>)
    }
  }

  search() {
    let query = '?idxID=a072&per=25'
    let data = $(this.refs.searchForm).serializeArray()
    let url ='http://imagineutah.idxbroker.com/idx/results/listings'
    data.map( field => {
      query += `&${field.name}=${field.value}`
    })

    this.setState({ showResults: true, results: url + query })
  }

  showSearch() {
    let count = 0
    let subTypes = this.props.subTypes.map( subType => {
      return(
        <Input s={6} type="checkbox" value={subType} label={subType} name="a_propSubType" key={count++} />
      )
    })
    return(
      <div>
        <Card>
          <button onClick={this.search.bind(this)} className="btn">
            Search
            <i className="material-icons right">send</i>
          </button>
          <Row>
            <div style={{ overflowY: 'scroll', maxHeight: '80vh' }} >
              <form ref="searchForm" onSubmit={(e) => this.search(e)}>
                <Input s={12} name="pt" type="select" label="Property Type" onChange={this.handleChange.bind(this)}>
                  <option selected={this.selected('Commercial')} value="1">Commercial</option>
                  <option selected={this.selected('Farm')} value="2">Farm</option>
                  <option selected={this.selected('Lots and Land')} value="3">Lots and Land</option>
                  <option selected={this.selected('Multi-Family')} value="4">Multi-Family</option>
                  <option selected={this.selected('Residential')} value="5">Residential</option>
                </Input>
                {subTypes}
                <div className="col s12" style={{ paddingTop: '15px' }}>
                  <Input s={6} m={3} onChange={this.toggleType.bind(this)} type="radio" name="ccz" value="city" label="City"/>
                  <Input s={6} m={3} onChange={this.toggleType.bind(this)} type="radio" name="ccz" value="county" label="County" />
                  <Input s={6} m={3} onChange={this.toggleType.bind(this)} type="radio" name="ccz" value="postal_code" label="Postal Code" />
                  <Input s={6} m={3} onChange={this.toggleType.bind(this)} type="radio" name="ccz" value="mls" label="MLS" />
                </div>
                <div className="col s12">
                  {this.searchType()}
                  {this.subPropTypes()}
                </div>
                <Input s={12} m={6} label="Min Price" type="number" step="1000" min="0" defaultValue="100000" name="lp"/>
                <Input s={12} m={6} label="Max Price" type="number" step="1000" min="0" defaultValue="" name="hp"/>
                <Input s={12} m={6} label="Bedrooms" type="select" name="bd">
                  <option>Any Number</option>
                  <option value="0">Studio</option>
                  <option value="1">1+</option>
                  <option value="2">2+</option>
                  <option value="3">3+</option>
                  <option value="4">4+</option>
                  <option value="5">5+</option>
                  <option value="6">6+</option>
                  <option value="7">7+</option>
                  <option value="8">8+</option>
                  <option value="9">9+</option>
                  <option value="10">10+</option>
                </Input>
                <Input s={12} m={6} label="Bathrooms" type="select" name="tb">
                  <option>Any Number</option>
                  <option value="1">1+</option>
                  <option value="2">2+</option>
                  <option value="3">3+</option>
                  <option value="4">4+</option>
                  <option value="5">5+</option>
                  <option value="6">6+</option>
                  <option value="7">7+</option>
                  <option value="8">8+</option>
                  <option value="9">9+</option>
                  <option value="10">10+</option>
                </Input>
                <Input s={12} m={6} label="Square Feet" type="number" min="0" name="sqft" />
                <Input s={12} m={6} label="Acres" type="number" min="0" name="acres" />
                <Input s={6} label="Min Year Built" type="number" min="1800" size="4" name="amin_yearBuilt" />
                <Input s={6} label="Max Year Built" type="number" min="1800" size="4" name="amax_yearBuilt" />
              </form>
            </div>
          </Row>
        </Card>
      </div>
    )
  }

  coverStyle() {
    if ( navigator.userAgent.match(/Android/i)
         || navigator.userAgent.match(/webOS/i)
         || navigator.userAgent.match(/iPhone/i)
         || navigator.userAgent.match(/iPad/i)
         || navigator.userAgent.match(/iPod/i)
         || navigator.userAgent.match(/BlackBerry/i)
         || navigator.userAgent.match(/Windows Phone/i)
      ) {
         return { position: 'absolute', top: '54px', width: '96%', height: '100px', background: 'white' }
       }
      else {
         return { position: 'absolute', top: '65px', width: '96%', height: '78px', background: 'white' }
       }
  }

  contact() {
    if (this.props.currentAgent._id) {
      let agent = this.props.currentAgent
      return (
        <div className="col s8">
          <div className="col s8">
            <h6 className="center">{`${agent.firstName} ${agent.lastName}`}</h6>
            <h6 className="center">{agent.phone}</h6>
            <p className="center">
              <a href={`mailto:${agent.email}`} className="center">{agent.email}</a>
            </p>
          </div>
          <div className="col s2">
            <img className={thumb} src={`https://dl.dropboxusercontent.com/s/${agent.imgUrl}?raw=1`} />
          </div>
        </div>
      )
    } else {
      return (
        <div className="col s8">
          <p className="center">Imagine Real Estate</p>
          <p className="center">(801) 205-7000</p>
          <p className="center"><a href="mailto:janet@imagineutah.com">Contact</a></p>
        </div>
      )
    }
  }

  showResults() {
    return (
      <div>
        <div style={this.coverStyle()}>
          <button className="btn center col s4" onClick={this.toggleResults.bind(this)}>New Search</button>
          {this.contact()}
        </div>
        <iframe id="frame" style={{ width: '100%', height: '80vh' }} src={this.state.results} />
      </div>
    )
  }

  render() {
    if (this.state.showResults)
      return this.showResults()
    else if (this.state.mls)
      return this.mls()
    else
      return this.showSearch()
  }
}

const mapStateToProps = (state) => {
  return { subTypes: state.search.subTypes, propertyType: state.search.propertyType, currentAgent: state.agents }
}

export default connect(mapStateToProps)(SearchBox)
