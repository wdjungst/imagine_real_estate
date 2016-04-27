import React from 'react'
import { Row, Col } from 'react-materialize'
import $ from 'jquery'
import { Link } from 'react-router'

class Dashboard extends React.Component {
  constructor(props) {
    super(props)
    this.addAgent = this.addAgent.bind(this)
    this.getAgents = this.getAgents.bind(this)
    this.filterUrl = this.filterUrl.bind(this)
    this.state = { agents: [] }
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
    let agentBio = bio.value
    let phone = this.refs.phone
    let url = this.refs.url
    let imgUrl = this.refs.imgUrl
    e.preventDefault()
    $.ajax({
      url: '/api/agents',
      type: 'POST',
      contentType: 'application/json',
      data: JSON.stringify({ firstName: firstName.value, lastName: lastName.value, email: email.value, bio: agentBio, phone: phone.value, url: url.value, imgUrl: imgUrl.value })
    }).done( () => {
      this.getAgents()
    }).always( () => {
      this.refs.firstName.value = ''
      this.refs.lastName.value = ''
      this.refs.email.value = ''
      this.refs.bio.value = ''
      this.refs.phone.value = ''
      this.refs.url.value = ''
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
    let url = this.refs.url
    let str = this.refs.url.value
    debugger
    url.value = str.replace(/[^a-z0-9]/gi,'')
  }


  render() {
    let agents = this.state.agents.map( agent => {
      return(this.agentLink(agent))
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
              <input onChange={this.filterUrl} placeholder="url" ref="url" required={true} />
              <input placeholder="(801) 555-5555" ref="phone" />
              <input placeholder="jeakin.jpg" ref="imgUrl" />
              <textarea ref="bio"></textarea>
              <button className="btn" type="submit">Add</button>
            </form>
          </Col>
          <Col s={12} m={6}>
          {agents}
          </Col>
        </Row>
      </div>
    )
  }
}

export default Dashboard
