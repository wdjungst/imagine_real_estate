import React from 'react'
import { Row, Col } from 'react-materialize'
import $ from 'jquery'
import { Link } from 'react-router'
import Service from './Service'

class Dashboard extends React.Component {
  constructor(props) {
    super(props)
    this.addAgent = this.addAgent.bind(this)
    this.getAgents = this.getAgents.bind(this)
    this.filterUrl = this.filterUrl.bind(this)
    this.getServices = this.getServices.bind(this)
    this.removeService = this.removeService.bind(this)
    this.updateService = this.updateService.bind(this)
    this.state = { agents: [], services: [], filteredServices: [] }
  }

  componentWillMount() {
    this.getAgents()
  }

  getAgents() {
    $.ajax({
      url: '/api/agents',
      type: 'GET',
      contentType: 'application/json',
      dataType: 'json'
    }).done( agents => {
      this.setState({ agents: agents })
    })
  }

  addAgent(e) {
    let firstName = this.refs.firstName
    let lastName = this.refs.lastName
    let email = this.refs.email
    let bio = this.refs.bio
    let agentBio = this.refs.bio
    let phone = this.refs.agentPhone
    let agentUrl = this.refs.agentUrl
    let imgUrl = this.refs.imgUrl
    let website = this.state.website
    e.preventDefault()
    $.ajax({
      url: '/api/agents',
      type: 'POST',
      contentType: 'application/json',
      data: JSON.stringify({ firstName: firstName.value, lastName: lastName.value, email: email.value, bio: agentBio.value, phone: phone.value, url: agentUrl.value, imgUrl: imgUrl.value, website: website.value })
    }).done( () => {
      firstName.value = ''
      lastName.value = ''
      email.value = ''
      bio.value = ''
      phone.value = ''
      agentUrl.value = ''
      imgUrl.value = ''
      website.value = ''
      this.getAgents()
    })
  }

  agentLink(agent) {
    let url = `${agent.url}`
    return(
      <div key={agent._id}>
        <Link to={`/agents/${url}`}>
          {`${agent.lastName}, ${agent.firstName}`}
        </Link>
        <br />
      </div>
    )
  }

  filterUrl() {
    let url = this.refs.agentUrl
    let str = this.refs.agentUrl.value
    url.value = str.replace(/[^a-z0-9]/gi,'')
  }

  addService(e) {
    e.preventDefault()
    let cat = this.refs.category
    if (cat.value === '') {
      alert('Choose a valid category')
      return
    }
    let name = this.refs.name
    let url = this.refs.url
    let phone = this.refs.phone
    $.ajax({
      url: '/api/services',
      type: 'POST',
      contentType: 'application/json',
      data: JSON.stringify({ category: cat.value, name: name.value, url: url.value, phone: phone.value })
    }).done( service => {
      this.setState({ services: [ ...service, this.state.services ] })
    }).always( () => {
      cat.value = ''
      name.value = ''
      url.value = ''
      phone.value = ''
    })
  }

  getServices(e) {
    let val = e.target.value
    $.ajax({
      url: '/api/services',
      type: 'GET',
      contentType: 'application/json',
      data: { category: val }
    }).done( services => {
      this.setState({ filteredServices: services })
    })
  }

  removeService(id) {
    let services = this.state.filteredServices.filter( service => service._id !== id )
    this.setState({ filteredServices: services })
  }

  updateService(service) {
    let services = this.state.filteredServices.map( ser => {
      if (ser._id !== service._id) {
        return ser
      }
      return {
        ...ser,
        ...service
      }
    })
    this.setState({ filteredServices: services })
  }

  render() {
    let agents = this.state.agents.map( agent => {
      return(this.agentLink(agent))
    })

    let services = this.state.filteredServices.map( service => {
      return(
        <Service
          key={service._id}
          {...service}
          removeService={this.removeService}
          updateService={this.updateService}
        />
      )
    })
    return(
      <div>
        <h2 className="center">Dashboard</h2>
        <Row>
          <Col s={12} m={6}>
            <h3 className="center">Add Agent</h3>
            <form onSubmit={(e) => this.addAgent(e)}>
              <input placeholder="First Name" ref="firstName" />
              <input placeholder="Last Name" ref="lastName" />
              <input placeholder="Email" ref="email" />
              <input onChange={this.filterUrl} placeholder="url" ref="agentUrl" required={true} />
              <input placeholder="(801) 555-5555" ref="agentPhone" />
              <input placeholder="jeakin.jpg" ref="imgUrl" />
              <input placeholder="http://mywebsite.com" ref="website" />
              <textarea ref="bio"></textarea>
              <button className="btn" type="submit">Add</button>
            </form>
          </Col>
          <Col s={12} m={2}>
            <h3 className="center">Agents</h3>
            {agents}
          </Col>
          <Col s={12} m={4}>
            <h3 className="center">Add Service</h3>
            <form onSubmit={(e) => this.addService(e)}>
              <select className="browser-default" ref="category">
                <option value="">-- Select One</option>
                <option value="home_inspections">Home Inspections</option>
                <option value="home_warranties">Home Warranties</option>
                <option value="mold">Mold</option>
                <option value="radon">Radon</option>
                <option value="lead_based_paint">Lead Based Paint</option>
                <option value="asbestos">Asbestos</option>
                <option value="eifs_stucco">Eifs Stucco</option>
                <option value="earthquake_information">Earthquake Information</option>
                <option value="methamphetamine">Methamphetamine</option>
                <option value="hazardous_waste">Hazardous Waste</option>
                <option value="duct_cleaning">Duct Cleaning</option>
                <option value="flood_zones">Flood Zones</option>
                <option value="environmental_report">Environmental Report</option>
                <option value="1031_exchangers">1031 Exchangers</option>
                <option value="title_companies">Title Companies</option>
                <option value="education">Education</option>
              </select>
              <input placeholder="Name" ref="name" required={true}/>
              <input placeholder="URL" ref="url" />
              <input placeholder="Phone" ref="phone" />
              <button className="btn" type="submit">Add</button>
            </form>
            <h3 className="center">Delete / Edit Services</h3>
              <select onChange={this.getServices} className="browser-default" ref="filter">
                <option value="">-- Select One</option>
                <option value="home_inspections">Home Inspections</option>
                <option value="home_warranties">Home Warranties</option>
                <option value="mold">Mold</option>
                <option value="radon">Radon</option>
                <option value="lead_based_paint">Lead Based Paint</option>
                <option value="asbestos">Asbestos</option>
                <option value="eifs_stucco">Eifs Stucco</option>
                <option value="earthquake_information">Earthquake Information</option>
                <option value="methamphetamine">Methamphetamine</option>
                <option value="hazardous_waste">Hazardous Waste</option>
                <option value="duct_cleaning">Duct Cleaning</option>
                <option value="flood_zones">Flood Zones</option>
                <option value="environmental_report">Environmental Report</option>
                <option value="1031_exchangers">1031 Exchangers</option>
                <option value="title_companies">Title Companies</option>
                <option value="education">Education</option>
              </select>
              {services}
          </Col>
        </Row>
      </div>
    )
  }
}

export default Dashboard
