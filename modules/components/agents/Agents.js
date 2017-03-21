import React from 'react'
import $ from 'jquery'
import { Link } from 'react-router'
import { thumb, downTen, fitCard } from './styles.css'
import ring from '../ring.svg'

class Agents extends React.Component {
  constructor(props) {
    super(props)
    this.state = { agents: [], isLoading: true }
  }

  componentWillMount() {
    $.ajax({
      url: '/api/agents',
      type: 'GET',
      contentType: 'application/json'
    }).done( agents => {
      this.setState({ agents: agents, isLoading: false })
    })
  }

  render() {
    let agents = this.state.agents.map( agent => {
      let name = `${agent.firstName} ${agent.lastName}`
      return(
        <div key={agent._id} className="col s12 m3">
          <div className={`${fitCard} card blue-grey darken-1`}>
            <div className="card-content white-text">
              <h5 className="center">{name}</h5>
              <div className={`row ${downTen}`}>
                <div className="col s3">
                  <img className={`${thumb} responsive-img circle`} src={`https://dl.dropboxusercontent.com/s/${agent.imgUrl}`} />
                </div>
                <div className="col s9">
                  <h5>{agent.phone}</h5>
                  <p>{agent.email}</p>
                </div>
              </div>
            </div>
            <div className="card-action">
              <div className="center">
                <Link to={`/agents/${agent.url}`}>View Profile</Link>
              </div>
            </div>
          </div>
        </div>
      )
    })
    let loading = () => {
      if (this.state.isLoading)
        return(<img src={ring} />)
    }
    return(
      <div>
        <h4 className="center">Agents</h4>
        <div className={`row ${downTen}`}>
          {loading()}
          {agents}
        </div>
      </div>
    )
  }
}

export default Agents
