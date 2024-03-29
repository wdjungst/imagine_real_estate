import React from 'react'
import { connect } from 'react-redux'
import $ from 'jquery'
import { profileImg, logoImg, downTen } from './styles.css'
import logo from '../logoBlue.png'
import ContactForm from '../contact/ContactForm'
import ring from '../ring.svg'
import { setAgent } from '../actions'

class Agent extends React.Component {
  constructor(props) {
    super(props)
    this.toggleEdit = this.toggleEdit.bind(this)
    this.deleteAgent = this.deleteAgent.bind(this)
    this.editAgent = this.editAgent.bind(this)
    this.bio = this.bio.bind(this)
    this.state = { agent: {}, edit: false, notFound: false, isLoading: true }
  }

  componentWillMount() {
    const id = this.props.location.search.split('id=')[1]
    let agentUrl = this.props.params.name.toLowerCase()
    $.ajax({
      url: `/api/agents/${agentUrl}`,
      type: 'GET',
      contentType: 'application/json',
      data: { url: agentUrl, id: id }
    }).done( agent => {
      const formattedAgent = {
        ...agent,
        firstName: agent.firstname,
        lastName: agent.lastname,
        imgUrl: agent.imgurl
      }
      this.setState({ agent: formattedAgent, isLoading: false })
    }).fail( () => {
      if (this.props.auth)
        this.props.history.push('/dashboard')
      else
        this.props.history.push('/agents')
    })
  }

  urlify(text) {
    const urlRegex = /(((https?:\/\/)|(www\.))[^\s]+)/g
    const splitText = text.split(' ')
    return splitText.map(word => {
      if (word.match(urlRegex)) {
        const hasProtocol = word.match(/^https?/)
        return (
          <a
            href={hasProtocol ? word : `https://${word}`}
            target="_blank"
          >
            {word}
          </a>
        )
      }
      return <span>{word} </span>
    })
  }

  reformatBio(line) {
    if (!line) return
    return this.urlify(line.replace(/"/g, "'"))
  }

  deleteAgent() {
    let choice = confirm('Really delete agent?')
    if (choice) {
      $.ajax({
        url: `/api/agents/${this.state.agent.id}`,
        type: 'DELETE',
        contentType: 'application/json',
        data: JSON.stringify({ id: this.state.agent.id })
      }).done( () => {
        if (this.props.auth) {
          this.props.history.push('/dashboard')
        } else {
          this.props.history.push('/')
        }
      }).always( () => {
        this.refs.forEach( ref => {
          ref.value = ''
        })
      })
    }
  }

  editAgent(e) {
    e.preventDefault()
    const { id } = this.state.agent
    let agent = this.refs
    let bio = this.refs.bio
    $.ajax({
      url: `/api/agents/${id}`,
      type: 'PATCH',
      contentType: 'application/json',
      data: JSON.stringify({
        id: this.state.agent.id,
        firstName: agent.firstName.value,
        lastName: agent.lastName.value,
        phone: agent.phone.value,
        email: agent.email.value,
        bio: bio.value,
        url: agent.url.value,
        imgUrl: agent.imgUrl.value,
        website: agent.website.value
      })
    }).done( () => {
      this.props.history.push('/dashboard')
    }).fail( msg => {
      alert('Something went wrong. Try again')
    })
  }

  toggleEdit() {
    this.setState({ edit: !this.state.edit })
  }

  bio() {
    let agent = this.state.agent
    let bio = []
    if (agent.bio) {
      agent.bio.split('\n').map( entry => {
        bio.push(
          <div>
            <span>
              <strong>
              {this.reformatBio(entry)}
              <br />
              </strong>
            </span>
          </div>
        )
      })
      return bio
    }
  }

  showWebsite(websites) {
    if (websites) {
      return websites.split(',').map(site =>
        <div className="center">
          <a href={site} target="_blank">{site}</a>
        </div>
      )
    }
    return null
  }

  show() {
    let agent = this.state.agent
    let edit = () => {
      if (this.props.auth && agent.url)
        return(<button className="btn" onClick={this.toggleEdit}>Edit</button>)
    }
    let name = agent.url ? `${agent.firstName} ${agent.lastName}` : 'Agent Not Found'
    let phone = agent.phone ? agent.phone.replace('(','').replace('-','').replace(' ', '') : ''
    let loading = () => {
      if (this.state.isLoading)
        return(<img src={ring} />)
    }
    return(
      <div>
        {edit()}
        <div className="row">
          <div className="col s12 m3 center">
            <img className={profileImg} src={`https://dl.dropboxusercontent.com/s/${agent.imgUrl}?raw=1`} />
            {loading()}
            <h5 className="center">{`${name}`}</h5>
            <div className="center">
              <a href={`tel:${phone}`}>{agent.phone}</a>
            </div>
            <div className="center">
              <a href={`mailto:${agent.email}`}>{agent.email}</a>
            </div>
            {this.showWebsite(agent.website)}
          </div>
          <div className={`col s12 m4 offset-m1`}>
            <div className="center">
              <img className={logoImg} src={logo} />
            </div>
            <div className={downTen}>
              {this.bio()}
            </div>
          </div>
          <div className={`col s12 m3 ${downTen}`}>
            <h4 className="center">Contact Me</h4>
            <ContactForm email={agent.email} />
          </div>
        </div>
      </div>
    )
  }

  edit() {
    let agent = this.state.agent
    return (
      <div className="container">
        <form onSubmit={(e) => this.editAgent(e)}>
          <div className="col s12">
            <label htmlFor="first_name">First Name</label>
            <input id="first_name" placeholder={agent.firstName} ref="firstName" defaultValue={agent.firstName} />
          </div>
          <div className="col s12">
            <label htmlFor="last_name">Last Name</label>
            <input id="last_name" placeholder={agent.lastName} ref="lastName" defaultValue={agent.lastName} />
          </div>
          <div className="col s12">
            <label htmlFor="email">Email</label>
            <input id="email" placeholder={agent.email} ref="email" defaultValue={agent.email} />
          </div>
          <div className="col s12">
            <label htmlFor="phone">Phone</label>
            <input id="phone" placeholder={agent.phone} ref="phone" defaultValue={agent.phone} />
          </div>
          <div className="col s12">
            <label htmlFor="url">url</label>
            <input id="url" required={true} placeholder={this.props.params.name} ref="url" defaultValue={this.props.params.name} />
          </div>
          <div className="col s12">
            <label htmlFor="img_url">Img Url</label>
            <input id="img_url" placeholder={agent.imgUrl} ref="imgUrl" defaultValue={agent.imgUrl} />
          </div>
          <div className="col s12">
            <label htmlFor="website">Website</label>
            <input id="website" placeholder={agent.website} ref="website" defaultValue={agent.website} />
          </div>
          <div className="col s12">
            <label htmlFor="bio">Bio</label>
            <textarea id="bio" defaultValue={agent.bio} ref="bio"></textarea>
          </div>
          <button type="button" className="btn red" onClick={this.deleteAgent}>Delete</button>
          <button type="button" className="btn blue" onClick={this.toggleEdit}>Cancel</button>
          <button className="btn" type="submit">Update</button>
        </form>
      </div>
    )
  }

  render() {
    if (!this.state.edit)
      return this.show()
    else
      return this.edit()
  }
}

const mapStateToProps = (state) => {
  return({ auth: state.auth.isAuthenticated })
}

export default connect(mapStateToProps, null)(Agent)
